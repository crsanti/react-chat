import React from 'react';
import { Spring, SpringConfig, SpringRendererFunc, TransitionProps } from 'react-spring/renderprops';

interface FadeInProps {
  children: SpringRendererFunc<Style>;
  show?: boolean;
  enterDelay?: TransitionProps<any>['trail'];
}

interface Style {
  opacity: number;
}

const visible: Style = { opacity: 1 };
const hidden: Style = { opacity: 0 };
const config: SpringConfig = { duration: 1000 };
export const FadeIn: React.FunctionComponent<FadeInProps> = ({ children }) => {
  return (
    <Spring config={config} from={hidden} to={visible}>
      {children}
    </Spring>
  );
};
