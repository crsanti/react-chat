import { compose } from 'ramda';
import { useState } from 'react';
import { getText } from './utils';

export const useValue = (initialValue = '') => {
  const [value, setValue] = useState<string>(initialValue);
  const onChange = compose(setValue, getText);
  const reset = (resetValue?: string) => setValue(resetValue || '');

  return { value, onChange, reset };
};
