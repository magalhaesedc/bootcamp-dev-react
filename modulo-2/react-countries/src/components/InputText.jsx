export default function InputText({
  labelDescription = "Descricao do Label",
  inputValue = "Valor padrão do input",
  onInputChange = null,
  id = "id_input_text",
  autoFocus = false
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>
      <input
        id={id}
        className="border p-1"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus = {autoFocus}
      />
    </div>
  );
}
