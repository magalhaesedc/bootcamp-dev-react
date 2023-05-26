import { getNewId } from "../services/idService"

export default function RadioButton({
    children = "Descricão Padrão",
    valueName= "name-default",
    valueId= getNewId(),
    valueChecked = true,
    onClickRadioButton = null
}){
    function handleRadioButtonChange(){
        if(onClickRadioButton){
            onClickRadioButton();
        }
    }

    return <div className="space-x-2 p-2">
        <input type="radio" name={valueName} id={valueId} checked={valueChecked} onChange={handleRadioButtonChange}></input>
        <label htmlFor={valueId}>{children}</label>
    </div>
}