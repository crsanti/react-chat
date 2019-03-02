import { compose, prop } from 'ramda';

type GetText = (event: React.FormEvent<HTMLElement>) => string;
export const getText = compose(
  prop('value'),
  prop('target'),
) as GetText;
