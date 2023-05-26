import { useEffect, useState } from "react"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import Main from "../components/Main"
import Error from "../components/Error"
import Header from "../components/Header"
import Button from "../components/Button"
import Loading from "../components/Loading"
import FlashCard from "../components/FlashCard"
import FlashCards from "../components/FlashCards"
import RadioButton from "../components/RadioButton"
import { helperShuffleArray } from "../helpers/arrayHelpers"
import { apiCreateFlashCard, apiDeleteFlashCard, apiGetAllFlashCards, apiUpdateFlashCard } from "../services/apiService"
import FlashCardItem from "../components/FlashCardItem"
import FlashCardForm from "../components/FlashCardForm"

export default function FlashCardsPage() {

    const [allCards, setAllCards] = useState([]);
    const [studyCards, setStudyAllCards] = useState([]);
    const [showTitleFlashCard, setShowTitleFlashCard] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [createMode, setCreateMode] = useState(true);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedFlashCard, setSelectedFlashCard] = useState(null);

    useEffect(() => {
        async function getAllCards() {
            try {
                const backEndFlashCards = await apiGetAllFlashCards();
                setAllCards(backEndFlashCards);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (error) {
                setTimeout(() => {
                    setError(error.message);
                }, 1000);
            }
        }
        getAllCards();
    }, []);

    function handleButtonClick() {
        const shuffledCards = helperShuffleArray(studyCards)
        setStudyAllCards(shuffledCards);
    }

    useEffect(() => {
        setStudyAllCards(allCards.map(card => ({ ...card, showTitle: true })))
    }, [allCards]);

    function handleToggleFlashCard(id) {
        setStudyAllCards(
            [...studyCards]
                .map(card => {
                    if (card.id === id) {
                        return { ...card, showTitle: !card.showTitle }
                    }
                    return card;
                })
        )
    }

    function handleRadioButtonShowTitle() {
        setStudyAllCards(
            [...studyCards]
                .map(card => {
                    return { ...card, showTitle: true }
                })
        )
        setShowTitleFlashCard(true);
    }

    function handleRadioButtonShowDescription() {
        setStudyAllCards(
            [...studyCards]
                .filter(card => {
                    return { ...card, showTitle: false }
                })
        )
        setShowTitleFlashCard(false);
    }

    async function handleFlahCardDelete(cardId) {
        try {
            //BackEnd
            await apiDeleteFlashCard(cardId);

            //Front End
            setAllCards(
                [...studyCards]
                    .filter(({ id }) => id !== cardId)
            )
            setError('');
        } catch(error) {
            setError(error.message);
        }

    }

    function handleFlahCardEdit(card) {
        setCreateMode(false);
        setSelectedFlashCard(card);
        setSelectedTab(1);
    }

    function handleButtonNewFlashCard() {
        setCreateMode(true);
        setSelectedFlashCard(null);
    }

    function handleTableSelect(indexTab) {
        setSelectedTab(indexTab);
    }

    async function handlePersist(title, description) {
        if (createMode) {
            try{
                //back-end
                const newFlashCard = await apiCreateFlashCard(title, description);
    
                //front-end
                setAllCards([...allCards, { id: newFlashCard.id, title: newFlashCard.title, description: newFlashCard.description, showTitle: true }])

                setError('');
            }catch(error){
                setError(error.message);
            }
        } else {
            try{
                //back-end
                await apiUpdateFlashCard(selectedFlashCard.id, title, description);

                //front-end
                setAllCards([...allCards].map(flashCard => {
                    if (flashCard.id === selectedFlashCard.id) {
                        return { ...flashCard, title, description }
                    }
                    return flashCard;
                }))
                setCreateMode(true);
                setSelectedFlashCard(null);
                setError('');
            }catch(error){
                setError(error.message);
            }
        }
    }

    let mainJsx = (
        <div className="flex flex-row justify-center my-4">
            <Loading></Loading>
        </div>
    );

    if (error) {
        mainJsx = (
            <div className="my-4 flex flex-row justify-center">
                <Error>{error}</Error>
            </div>
        )
    }

    if (!loading && !error) {
        mainJsx = (
            <>
                <Tabs selectedIndex={selectedTab} onSelect={handleTableSelect}>
                    <TabList>
                        <Tab>Listagem</Tab>
                        <Tab>Cadastro</Tab>
                        <Tab>Estudo</Tab>
                    </TabList>

                    <TabPanel>
                        {allCards.map(flashCard =>
                            <FlashCardItem
                                onDelete={handleFlahCardDelete}
                                onEdit={handleFlahCardEdit}
                                key={flashCard.id}
                            >
                                {flashCard}
                            </FlashCardItem>
                        )}
                    </TabPanel>

                    <TabPanel>
                        <div className="my-4">
                            <Button onButtonClick={handleButtonNewFlashCard}>Novo</Button>
                        </div>
                        <FlashCardForm createMode={createMode} onPersist={handlePersist}>{selectedFlashCard}</FlashCardForm>
                    </TabPanel>

                    <TabPanel>
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
                                studyCards.map(({ id, title, description, showTitle }) => {
                                    return (
                                        <FlashCard key={id} id={id} title={title} description={description} showFlashCardsTitle={showTitle} toogleShowCardsTitle={handleToggleFlashCard} />
                                    );
                                })
                            }
                        </FlashCards>
                    </TabPanel>
                </Tabs>
            </>
        );
    }

    return (
        <>
            <Header>react-flash-card-v2</Header>
            <Main>{mainJsx}</Main>
        </>
    );
}