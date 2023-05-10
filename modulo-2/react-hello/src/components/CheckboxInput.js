export default function CheckboxInput({
    labelDescription = "Descricao do Checkbox",
    inputValue = false,
    onCheckboxChange = null,
    id = "id_input_checkbox",
    autoFocus = false
  }) {
    function handleCheckboxInputChange() {
      if (onCheckboxChange) {
        onCheckboxChange();
      }
    }
  
    return (
      <div className="flex flex-row items-center space-x-2 my-4 ">
        <input
          id={id}
          className="border p-1"
          type="checkbox"
          value={inputValue}
          onChange={handleCheckboxInputChange}
          autoFocus = {autoFocus}
        />

        <label className="text-sm mb-1" htmlFor={id}>
          {labelDescription}
        </label>
      </div>
    );
  }
  