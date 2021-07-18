const InputField = ({ text, handlerInput, handlerSubmit }) => (
  <label htmlFor="">
    <input
      value={text}
      onChange={(e) => handlerInput(e.target.value)}
      onKeyDown={(e) => (e.key === 'Enter' ? handlerSubmit() : null)}
    />
    <button onClick={handlerSubmit}>Добавить</button>
  </label>
)

export default InputField
