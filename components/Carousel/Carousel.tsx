import React, { ReactNode } from 'react';
import { animated, useSpring, useTransition } from '@react-spring/web';
import useCarousel, { CarouselTypes, Slide } from '../../store/carousel';
import { ContentTypes } from './Carousel.types';

const HeightTransition = ({ children }) => {
  const spring = useSpring({
    from: { height: 'auto' },
    to: { height: 'auto' },
  });

  return <animated.div style={{ height: spring.height }}>{children}</animated.div>;
};

const selector = ({ active, previousActive }: CarouselTypes) => [active, previousActive];

const Carousel = ({ children }) => {
  const [active, previousActive] = useCarousel(selector);
  return (
    <HeightTransition>
      <Content active={active} previousActive={previousActive}>
        {children}
      </Content>
    </HeightTransition>
  );
};

const Content = ({ children, active, previousActive }: ContentTypes) => {
  const transition = useTransition(true, {
    initial: { x: 0 },
    from: { opacity: 0, x: previousActive < active ? 200 : -200 },
    enter: { opacity: 1, x: 0 },
    leave: {
      opacity: 0,
      x: previousActive < active ? -100 : 100,
      position: 'absolute',
      pointerEvents: 'none',
    },
    delay: 1,
    keys: active,
  });

  return (
    <>
      {transition(({ x, ...rest }) => (
        <animated.div style={{ transform: x.to((val) => `translate3d(${val}px,0,0)`), ...rest }}>
          {children[active]}
        </animated.div>
      ))}
    </>
  );
};

export default Carousel;
