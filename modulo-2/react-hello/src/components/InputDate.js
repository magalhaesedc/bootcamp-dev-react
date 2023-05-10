export default function InputDate({
  labelDescription = "Descricao do Label",
  inputValue = "2000-01-01",
  onInputChange = null,
  id = "id_input_date",
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
        type="date"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus = {autoFocus}
      />
    </div>
  );
}
