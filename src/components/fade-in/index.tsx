import { Spring, SpringRendererFunc } from 'react-spring/renderprops';

interface Props {
  children: SpringRendererFunc<any>;
  fromTop?: boolean;
}

const getFrom = (fromTop: boolean) => ({
  opacity: 0,
  transform: fromTop ? 'translate3d(0, -2.2rem, 0)' : 'translate3d(0, 2.2rem, 0)',
});
const to = { opacity: 1, transform: 'translate3d(0, 0rem, 0)' };
export const FadeIn: React.StatelessComponent<Props> = ({ children, fromTop = false }) => {
  return (
    <Spring from={getFrom(fromTop)} to={to}>
      {children}
    </Spring>
  );
};
