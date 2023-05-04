function fetchJson(url) {
	return fetch(url).then(r => {
		return r.json();
	});
}

function conversionPrice(price) {
	let priceFloat = parseFloat(price) * 5.5;
	return priceFloat.toFixed(2);
}

function conversionNumberNull(number){
	if(number == null || number == undefined){
		return 0;
	}else{
		return number;
	}
}

function conversionStringNull(str){
	if(str == null || str == undefined){
		return "";
	}else{
		return str;
	}
}

function setImageDefault(event){
	event.setAttribute("src", "img/semfoto.png");
}

function emptyProduct(){
	let divCards = document.getElementById("card");
	let quantidade = document.getElementById("qtd");
	quantidade.className = "d-none";
	divCards.innerHTML = `<div class="text-center w-100 text-danger fw-bold">Nenhum registro encontrado<div>`;
	showCards();
}

function setCountProduct(value){
	let lenghtProduct = document.getElementById("qtd");
	let valueLengthProduct = document.getElementById("qtd-count");
	lenghtProduct.className = "";
	valueLengthProduct.innerHTML = value;
}

function showFilter(){
	document.getElementById("div-filter").classList.remove("d-none");
	document.getElementById("loading").classList.add("d-none");
}

function showCards(){
	document.getElementById("card").classList.remove("d-none");
	document.getElementById("loading").classList.add("d-none");
}

function setValuesFilter(listBrand, listProductType){
	let filterBrand = document.getElementById("filter-brand");
	let filterProductType = document.getElementById("filter-product-type");
	
	filterBrand.innerHTML = '<option selected>Todos</option>';
	filterProductType.innerHTML = '<option selected>Todos</option>';

	listBrand.sort();
	listProductType.sort();

	listBrand.forEach(brand => {
		if(brand != null){
			let newSelect = document.createElement("option");
			newSelect.textContent = brand;
			filterBrand.appendChild(newSelect);
		}
	});

	listProductType.forEach(productType => {
		if(productType != null){
			let newSelect = document.createElement("option");
			newSelect.textContent = productType;
			newSelect.setAttribute("value", productType);
			filterProductType.appendChild(newSelect);
		}
	});
}


function getValuesFilter(){

	let filterName = document.getElementById("filter-name").value;
	let filterBrand = document.getElementById("filter-brand").value;
	let filterProductType = document.getElementById("filter-product-type").value;
	let filterOrder = document.getElementById("filter-order").value;

	filterBrand = filterBrand == "Todos" ? '' :  filterBrand;
	filterProductType = filterProductType == "Todos" ? '' :  filterProductType;

	return [filterName, filterBrand, filterProductType, filterOrder];
}


async function runModal(event) {
	let divProduct = event.target.offsetParent;
	let idProduct = divProduct.getAttribute("product_id");
	let modalDatails = document.getElementById("modalDatails");
   	let modal = new bootstrap.Modal(modalDatails);

	let produto = await fetchJson(`https://makeup-api.herokuapp.com/api/v1/products/${idProduct}.json`);

	modalDatails.querySelector("#modal_url_img").setAttribute("src", produto.image_link);
	modalDatails.querySelector("#modalDatailsName").textContent = conversionStringNull(produto.name);
	modalDatails.querySelector("#modal_badge_brand").textContent = conversionStringNull(produto.brand);
	modalDatails.querySelector("#modal_badge_price").textContent = "R$ "+conversionPrice(conversionNumberNull(produto.price));
	modalDatails.querySelector("#table_col_brand").textContent = conversionStringNull(produto.brand);
	modalDatails.querySelector("#table_col_price").textContent = "R$ "+conversionPrice(produto.price);
	modalDatails.querySelector("#table_col_rating").textContent = conversionNumberNull(produto.rating);
	modalDatails.querySelector("#table_col_category").textContent = conversionStringNull(produto.category);
	modalDatails.querySelector("#table_col_product_type").textContent = conversionStringNull(produto.product_type);

	modal.show();
}

async function makeCard(id, url_img, name, brand, price, category, product_type) {
	return `<div class="col">
				<div class="card" product_id="${id}" category="${conversionStringNull(category)}" product_type="${conversionStringNull(product_type)}">
				<img src="${url_img}" onerror="setImageDefault(this)" class="card-img-top object-fit-cover img-container" height="215" width="215" alt="...">
				<div class="card-body">
					<h5 class="card-title">${conversionStringNull(name)}</h5>
					<p class="card-text">
					<span class="badge text-bg-secondary">${conversionStringNull(brand)}</span>
					<span class="badge text-bg-success">R$ ${conversionPrice(conversionNumberNull(price))}</span>
					</p>
				</div>
				</div>
			</div>`;
}

function filterContainsName(produto){
	let name = produto.name.toUpperCase();
	let valueFilterName = filterName.toUpperCase();
	return name.includes(valueFilterName); 
}

async function recuperarProdutos() {
	let divCards = document.getElementById("card");
	divCards.innerHTML = "";
	document.getElementById("loading").classList.remove("d-none");

	[filterName, filterBrand, filterProductType, filterOrder] = getValuesFilter();

	let log_filter = `Name: ${filterName} | Brand: ${filterBrand} | Product Type: ${filterProductType} | Order: ${filterOrder} `;

	let url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${filterBrand}&product_type=${filterProductType}`;

	console.log("Endpoint consumido: "+url);

	let produtos = await fetchJson(url);

	if(filterName.length > 0){
		produtos = produtos.filter(filterContainsName);
	}

	switch (filterOrder) {
	case '1':
		log_filter += 'Melhor Avaliado';
		produtos.sort((a,b) => b.rating - a.rating);
		break;
	case '2':
		log_filter += 'Menores Preços';
		produtos.sort((a,b) => a.price - b.price);
		break;
	case '3':
		log_filter += 'Maiores Preços';
		produtos.sort((a,b) => b.price - a.price);
		break;
	case '4':
		log_filter += 'A - Z';
		produtos.sort((a,b) => a.name.localeCompare(b.name));
		break;
	case '5':
		log_filter += 'Z - A';
		produtos.sort((a,b) => b.name.localeCompare(a.name));
		break;
	}

	console.log(log_filter);

	if(produtos.length < 1){
		emptyProduct();
		return;
	}

	setCountProduct(produtos.length);

	for (let i = 0; i < produtos.length; i++) {
		var div = document.createElement("div");
		div.className = "col";
		div.innerHTML = await makeCard(produtos[i].id, produtos[i].image_link, produtos[i].name, produtos[i].brand, produtos[i].price, produtos[i].category, produtos[i].product_type);
		div.addEventListener("click", runModal);
		divCards.appendChild(div);

		if(i === produtos.length-1){
			showCards();
			console.log('Itens carregados');
		}
	}
}

async function carregarFiltro() {

	let produtosFiltro = await fetchJson('https://makeup-api.herokuapp.com/api/v1/products.json');
	let brand = [...new Set(produtosFiltro.map(item => item.brand))];
	let productType = [...new Set(produtosFiltro.map(item => item.product_type))];
	setValuesFilter(brand, productType);

	showFilter();
	console.log('Filtro carregado!');
	
}

carregarFiltro();