export default function FlashCard({
    id,
    title = "Título do card",
    description = "Descrição do card, que pode conter mais palavras que o título",
    showFlashCardsTitle = true,
    toogleShowCardsTitle = null
}){ 

    function handleCardClick(){
        if(toogleShowCardsTitle){
            toogleShowCardsTitle(id)
        }
    }

    const fontSizeClassName = showFlashCardsTitle ? 'text-xl' : 'text-md';

    return (
        <div className={`shadow-lg p-2 m-2 w-80 h-40 cursor-pointer
                         flex flex-row justify-center items-center
                         font-semibold ${fontSizeClassName}`}
            style={{fontFamily: "monospace"}}
            onClick = {handleCardClick}
        >
            {showFlashCardsTitle ? title : description}
        </div>
    );
}