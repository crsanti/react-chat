import { SpringRendererFunc, Transition } from 'react-spring/renderprops';

interface Props {
  children: SpringRendererFunc<typeof visible>;
  fromTop?: boolean;
  active?: boolean;
}

interface Style {
  opacity: number;
  transform: string;
}

const getInitialTransition = (fromTop: boolean): Style => ({
  opacity: 0,
  transform: fromTop ? 'translate3d(0, -2.2rem, 0)' : 'translate3d(0, 2.2rem, 0)',
});

const visible: Style = { opacity: 1, transform: 'translate3d(0, 0rem, 0)' };
export const FadeIn: React.StatelessComponent<Props> = ({ children, fromTop = false, active = true }) => {
  const hidden = getInitialTransition(fromTop);

  return (
    <Transition trail={800} enter={visible} from={hidden} items={active} leave={hidden}>
      {(isActive) => isActive && children}
    </Transition>
  );
};
