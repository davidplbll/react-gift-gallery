import { useState } from 'react';
export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onNewValue(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar gift'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
