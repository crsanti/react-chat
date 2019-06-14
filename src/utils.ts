import { always, compose, not, prop } from 'ramda';
import isEmpty from 'ramda/es/isEmpty';

type FormEvent = React.FormEvent<HTMLInputElement>;
type FormTarget = FormEvent['currentTarget'];
type FormTargetValue = FormTarget['value'];
export const getText = compose<FormEvent, FormTarget, FormTargetValue>(
  prop('value'),
  prop('currentTarget'),
);

export const isNotEmpty = compose(
  not,
  isEmpty,
);

export const noop = always(undefined);
