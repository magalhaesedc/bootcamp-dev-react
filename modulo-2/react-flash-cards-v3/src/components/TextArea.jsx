import { getNewId } from "../services/idService";

export default function TextArea({
  labelDescription = 'Descrição do label:',
  textAreaValue = 'Valor padrão do text area',
  onTextAreaChange = null,
  id = getNewId(),
  autoFocus = false,
  rows = 4,
  maxLength = 230
}) {
  function handleInputChange({ currentTarget }) {
    if (onTextAreaChange) {
      const newValue = currentTarget.value;
      onTextAreaChange(newValue);
    }
  }

  const currentCharecterCount = textAreaValue.length;

  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>

      <textarea
        autoFocus={autoFocus}
        id={id}
        rows={rows}
        maxLength={maxLength}
        className="border p-1"
        type="text"
        value={textAreaValue}
        onChange={handleInputChange}
      />

      <div className="text-right mt-2"><span>{currentCharecterCount} / {maxLength}</span></div>
    </div>
  );
}
