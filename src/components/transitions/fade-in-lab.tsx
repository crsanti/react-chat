import React, { useState } from 'react';
import { Spring, SpringConfig, SpringRendererFunc } from 'react-spring/renderprops';
import { useInterval } from '../../hooks';

interface FadeInProps {
  children: SpringRendererFunc<Style>;
  active?: boolean;
  enterDelay?: number;
}

interface Style {
  opacity: number;
}

const visible: Style = { opacity: 1 };
const hidden: Style = { opacity: 0 };
const config: SpringConfig = { duration: 1000 };
export const FadeInLab: React.FunctionComponent<FadeInProps> = ({ children, active = true, enterDelay }) => {
  const [isStarting, setIsStarting] = useState(false);

  useInterval(() => {
    if (active) {
      setIsStarting(!isStarting);
    }
  }, 1000, !active);

  const from = active
    ? isStarting
      ? hidden
      : visible
    : hidden;
  const to = active
    ? isStarting
      ? visible
      : hidden
    : visible;

  return (
    <Spring config={config} from={from} to={to} delay={enterDelay}>
      {children}
    </Spring>
  );
};
