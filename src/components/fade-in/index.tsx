import { SpringRendererFunc, Transition, TransitionProps } from 'react-spring/renderprops';

interface Props {
  children: SpringRendererFunc<typeof visible>;
  fromTop?: boolean;
  active?: boolean;
  exitDelay?: TransitionProps<any>['trail'];
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
// TODO: Refactor to <Fade /> and add property type = "in" | "out" | "in-out"
export const FadeIn: React.FunctionComponent<Props> = ({ children, fromTop = false, active = true, exitDelay = 0 }) => {
  const hidden = getInitialTransition(fromTop);

  return (
    <Transition trail={exitDelay} enter={visible} from={hidden} items={active} leave={hidden}>
      {(isActive) => isActive && children}
    </Transition>
  );
};
