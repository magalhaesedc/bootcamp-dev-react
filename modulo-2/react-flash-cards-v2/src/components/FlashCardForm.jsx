import { useEffect, useState } from "react";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import Button from "./Button";
import Error from "./Error";

export default function FlashCardForm({ createMode = true , onPersist = null, children: flashCard = null }) {

    const [title, setTitle] = useState(flashCard?.title || '');
    const [description, setDescription] = useState(flashCard?.description || '');
    const [error, setError] = useState('');

    useEffect(()=>{
        if(createMode){
            setTitle('');
            setDescription('');
        }
    }, [createMode]);

    function handleInputTitle(newTitle) {
        setTitle(newTitle);
    }

    function handleTextAreaDescription(newDescription) {
        setDescription(newDescription);
    }

    function clearFields(){
        setTitle('');
        setDescription('');
    }

    function validadForm(){
        return title.trim() !== '' && description.trim() !== ''
    }

    function handleFormSubit(event) {
        event.preventDefault();

        if(validadForm()){
            if(onPersist){
                onPersist(title, description);
                setError('')
                clearFields();
            }
        }else{
            setError("Título e Descrição são obrigatórios");
        }
    }

    function handleFormReset() {
        clearFields();
    }

    const classNameBackgroundMode = createMode ? "bg-green-200" : "bg-yellow-200";

    return <form className={`${classNameBackgroundMode} p-4`} onSubmit={handleFormSubit} onReset={handleFormReset}>
        <h2 className="text-center font-semibold">Manuntenção de Flash Card</h2>
        <TextInput labelDescription="Título" inputValue={title} onInputChange={handleInputTitle}></TextInput>
        <TextArea labelDescription="Descrição" textAreaValue={description} onTextAreaChange={handleTextAreaDescription}></TextArea>

        <div className="flex flex-row items-center justify-between">
            {error !== '' ? <Error>{error}</Error> : <span></span> }
            <div>
                <Button classNameCollor="bg-red-200" type="reset">Limpar</Button>
                <Button classNameCollor="bg-green-400" type="submit">Salvar</Button>
            </div>
        </div>
    </form>
}