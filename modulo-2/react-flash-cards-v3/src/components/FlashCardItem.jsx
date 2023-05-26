import {AiOutlineEdit as EditIcon, AiOutlineDelete as DeleteIcon} from "react-icons/ai"

export default function FlashCardItem({children: flashCard, onDelete = null, onEdit = null}){
    const {id, title, description} = flashCard;

    function handleClickItemDelete(){
        if(onDelete){
            onDelete(id);
        }
    }

    function handleClickItemEdit(){
        if(onEdit){
            onEdit(flashCard);
        }
    }

    return <div className="border p-2 m-2">
        <ul className="flex flex-col space-y-4">
            <li>
                <strong>Título: </strong>{title}
            </li>
            <li>
                <strong>Descrição: </strong>{description}
            </li>
            <div className="flex flex-row justify-end items-center space-x-4">
                <EditIcon size={22} className="cursor-pointer" onClick={handleClickItemEdit} />
                <DeleteIcon size={22} className="cursor-pointer" onClick={handleClickItemDelete} />
            </div>
        </ul>
    </div>;
}