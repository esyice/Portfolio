import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import style from './TypingComponent.module.css'

const TypingComponent = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Front-End Developer", "Gamer","Game-Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    // Cleanup to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return <span className={style.animationtext} ref={typedElement}></span>;
};

export default TypingComponent;
