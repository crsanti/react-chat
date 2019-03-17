import { always, compose } from 'ramda';
import { useEffect, useRef, useState } from 'react';
import { getText } from './utils';
import { useSpring } from 'react-spring';

export const useValue = (initialValue = '') => {
  const [value, setValue] = useState<string>(initialValue);
  const onChange = compose(setValue, getText);
  const reset = (resetValue?: string) => setValue(resetValue || '');

  return { value, onChange, reset };
};

export const useInterval = <T extends Function>(callback: T, delay: number, pause = false) => {
  const savedCallback = useRef<T>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (!isNaN(delay) && !pause) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    } else {
      return always(undefined);
    }
  }, [delay, pause]);
};

export interface UseFadeInArgs {
  delay: number;
  duration: number;
}
export const useFadeIn = ({ delay, duration }: Partial<UseFadeInArgs> = {}) => useSpring({
  from: { opacity: 0 },
  to: { opacity: 1 },
  delay,
  config: duration ? { duration } : undefined,
});
