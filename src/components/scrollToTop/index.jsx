import React from 'react';
import './style.scss';

const ScrollToTop = () => {
  const clickToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="scrollup text-center"
      role="button"
      tabIndex="-1"
      onClick={clickToTop}
      onKeyPress={clickToTop}
      aria-label="scroll to top"
    >
      <i className="fa fa-angle-up" aria-hidden="true" />
    </div>
  );
};

export default ScrollToTop;
