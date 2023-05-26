import { read, destroy, create, edit } from "./httpService";
import { getNewId } from "./idService";

export async function apiGetAllFlashCards(){
    const allFlashCards = await read('/flashcards');
    return allFlashCards;
}

export async function apiDeleteFlashCard(cardId){
    await destroy(`/flashcards/${cardId}`);
}

export async function apiCreateFlashCard(title, description){
    const newFlashCard = await create(`/flashcards/`, {id: getNewId(), title, description});
    return newFlashCard;
}

export async function apiUpdateFlashCard(id, title, description){
    const updatedFlashCard = await edit(`/flashcards/${id}`, {title, description});
    return updatedFlashCard;
}