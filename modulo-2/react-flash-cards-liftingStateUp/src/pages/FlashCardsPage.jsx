import Header from "../components/Header"
import Main from "../components/Main"
import FlashCard from "../components/FlashCard"
import { allFlashCards } from "../data/allFlashCards";
import FlashCards from "../components/FlashCards";
import Button from "../components/Button";
import { useState } from "react";
import { helperShuffleArray } from "../helpers/arrayHelpers";
import RadioButton from "../components/RadioButton";

export default function FlashCardsPage() {

    const [allCards, setAllCards] = useState(allFlashCards);
    const [showTitleFlashCard, setShowTitleFlashCard] = useState(true);

    function handleButtonClick() {
        const shuffledCards = helperShuffleArray(allCards)
        setAllCards(shuffledCards);
    }

    function handleToggleFlashCard(id) {
        setAllCards(
            [...allCards]
                .map(card => {
                    if (card.id === id) {
                        return { ...card, showTitle: !card.showTitle }
                    }
                    return card;
                })
        )
    }

    function handleRadioButtonShowTitle() {
        setAllCards(
            [...allCards]
                .map(card => {
                    return { ...card, showTitle: true }
                })
        )
        setShowTitleFlashCard(true);
    }

    function handleRadioButtonShowDescription() {
        setAllCards(
            [...allCards]
                .map(card => {
                    return { ...card, showTitle: false }
                })
        )
        setShowTitleFlashCard(false);
    }

    return (
        <>
            <Header>react-flash-card-v1</Header>

            <Main>
                <div className="text-center mb-4">
                    <Button onButtonClick={handleButtonClick}>Embaralhar Cards</Button>
                </div>

                <div className="flex flex-row justify-center items-center space-x-2 m-1">
                    <RadioButton
                        valueId="radioShowTitleId"
                        valueName="radioShowTitleDescription"
                        valueChecked={showTitleFlashCard}
                        onClickRadioButton={handleRadioButtonShowTitle}
                    >
                        Mostrar Título
                    </RadioButton>

                    <RadioButton
                        valueId="radioShowDescriptionId"
                        valueName="radioShowTitleDescription"
                        valueChecked={!showTitleFlashCard}
                        onClickRadioButton={handleRadioButtonShowDescription}
                    >
                        Mostrar Descrição
                    </RadioButton>
                </div>

                <FlashCards>
                    {
                        allCards.map(({ id, title, description, showTitle }) => {
                            return (
                                <FlashCard key={id} id={id} title={title} description={description} showFlashCardsTitle={showTitle} toogleShowCardsTitle={handleToggleFlashCard} />
                            );
                        })
                    }
                </FlashCards>
            </Main>
        </>
    );
}