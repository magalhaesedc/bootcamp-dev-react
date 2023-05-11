import Item from "./Item";

export default function Country({
    children: country = null,
    onCountryClick = null,
    isVisited = false,
}) {
    if (!country) {
        return <div>Impossível renderizar o país</div>
    }

    function handleCountryClick(){
        if(handleCountryClick){
            return onCountryClick(country.id);
        }
    }

    const {name, capital, region, population, area} = country;

    const demographicDensity = population / area;

    const visitedClassName =  isVisited?'bg-green-200':'';

    return <div className={`border p-2 m-2 flex flex-row items-center space-x-2 cursor-pointer ${visitedClassName}`} onClick={handleCountryClick}>
        <img className="w-48" src="" alt={name}/>
        <ul>
            <li>
                <Item label="Nome:">{name}</Item>
            </li>
            <li>
                <Item label="Capital:">{capital}</Item>
            </li>
            <li>
                <Item label="Região:">{region}</Item>
            </li>
            <li>
                <Item label="População:">{population}</Item>
            </li>
            <li>
                <Item label="Área:">{area}</Item>
            </li>
            <li>
                <Item label="Densidade demográfica:">{demographicDensity}</Item>
            </li>
        </ul>
    </div>
}