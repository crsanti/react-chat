import { always, assoc, compose, curry, keys, not, prop, reduce } from 'ramda';
import isEmpty from 'ramda/es/isEmpty';

type ValidHTMLElement =
  HTMLButtonElement
  | HTMLDataElement
  | HTMLInputElement
  | HTMLOptionElement
  | HTMLOutputElement
  | HTMLParamElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

type FormEvent = React.SyntheticEvent<ValidHTMLElement>;
type FormTarget = FormEvent['currentTarget'];
type FormTargetValue = FormTarget['value'];
export const getValue = compose<FormEvent, FormTarget, FormTargetValue>(
  prop('value'),
  prop('currentTarget'),
);

export const isNotEmpty = compose(
  not,
  isEmpty,
);

export const noop = always(undefined);
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type KeysMap<O extends object> = {
  [K in keyof any]: keyof O
};

type MappedObj<O extends object, KM extends KeysMap<O>> = {
  -readonly [K in keyof KM]: KM[K] extends keyof O ? O[KM[K]] : never;
};
type RenameKeys = <O extends object, KM extends KeysMap<O>>(keysMap: KM, obj: O) => MappedObj<O, KM>;
export const renameKeys = curry((keysMap, obj) =>
  reduce((acc, key) => assoc(keysMap[key] || key, obj[key], acc), {}, keys(obj)) as RenameKeys);
