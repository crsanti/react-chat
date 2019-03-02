import { compose } from 'ramda';
import { useState } from 'react';
import { getText } from './utils';

export const useValue = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const resetValue = () => setValue(initialValue);
  const onChange = compose(
    setValue,
    getText,
  );

  return { value, onChange, resetValue };
};
