import { useEffect, useState } from "react";

export default function FlashCard({
    title = "Título do card",
    description = "Descrição do card, que pode conter mais palavras que o título",
    showFlashCardsTitle = true
}){ 
    const [showTitle, setShowTitle] = useState(showFlashCardsTitle);

    useEffect(() => {
        setShowTitle(showFlashCardsTitle)
    }, [showFlashCardsTitle]);

    function handleCardClick(){
        setShowTitle(currentShowTitle => !currentShowTitle);
    }

    const fontSizeClassName = showTitle ? 'text-xl' : 'text-md';

    return (
        <div className={`shadow-lg p-2 m-2 w-80 h-40 cursor-pointer
                         flex flex-row justify-center items-center
                         font-semibold ${fontSizeClassName}`}
            style={{fontFamily: "monospace"}}
            onClick = {handleCardClick}
        >
            {showTitle ? title : description}
        </div>
    );
}