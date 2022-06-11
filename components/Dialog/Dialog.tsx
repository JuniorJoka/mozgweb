import React from 'react';
import { useTransition, animated } from '@react-spring/web';
import DialogType from './Dialog.types';

const Dialog = ({ show, toggle, children }: DialogType) => {
  const transition = useTransition(show, {
    from: { transform: 'translate3d(0,-10px,0)', opacity: 0 },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,10px,0)', pointerEvents: 'none' },
    delay: 1,
  });

  return (
    show && (
      <>
        {transition(
          (styles, item) =>
            item && (
              <animated.div style={{ opacity: styles.opacity }}>
                <animated.div
                  className="fixed top-0 left-0 bottom-0 right-0"
                  onClick={toggle}
                ></animated.div>
                {children}
              </animated.div>
            )
        )}
      </>
    )
  );
};

export default Dialog;
