import { compose, unary } from 'ramda';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getValue, noop } from './utils';
import defaultTo from 'ramda/es/defaultTo';

type Reset = (value?: string) => void;
export const useValue = (initialValue = '') => {
  const [value, setValue] = useState<string>(initialValue);
  const onChange = useCallback(compose(setValue, getValue), []);
  const reset: Reset = useCallback(unary(compose(setValue, defaultTo(initialValue))), []);

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
      return noop;
    }
  }, [delay, pause]);
};
