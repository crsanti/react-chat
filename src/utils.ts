import { compose, prop, not } from 'ramda';
import isEmpty from 'ramda/es/isEmpty';

type GetText = (event: React.FormEvent<HTMLElement>) => string;
export const getText = compose(
  prop('value'),
  prop('target'),
) as GetText;

export const isNotEmpty = compose(
  not,
  isEmpty,
);
