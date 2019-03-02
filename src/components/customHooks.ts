import { compose } from 'ramda';
import { useState } from 'react';
import { getText } from './utils';

export const useValue = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  type Reset = (initialValue?: string) => void;
  const onChange = compose(setValue, getText);

  return { value, onChange, reset: setValue as Reset };
};
