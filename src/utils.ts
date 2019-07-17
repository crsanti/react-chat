import { always, compose, not, prop } from 'ramda';
import isEmpty from 'ramda/es/isEmpty';

type ValidHTMLElement =
  HTMLButtonElement
  | HTMLDataElement
  | HTMLInputElement
  | HTMLOptionElement
  | HTMLOutputElement
  | HTMLParamElement
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
