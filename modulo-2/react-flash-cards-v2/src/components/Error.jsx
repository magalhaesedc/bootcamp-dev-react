export default function Error({children: erroNessage}){
    return <span className="bg-red-200 text-red-800 p-4">{erroNessage}</span>
}