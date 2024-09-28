import {ChangeEventHandler, useState} from 'react';

export const useControlInput = () => {
  const [value, setValue] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return {value, setValue, handleChange};
};
