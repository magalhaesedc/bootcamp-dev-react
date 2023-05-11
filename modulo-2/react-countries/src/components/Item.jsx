export default function Item({children: value = 'Valor', label = 'Nome:'}){
    return <span className="text-sm">{label} <strong>{value}</strong></span>
}