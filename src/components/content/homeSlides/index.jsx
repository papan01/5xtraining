import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return null;
  }, [delay]);
}

function previous(length, current) {
  return (current - 1 + length) % length;
}

const HomeSlides = ({ imgSource }) => {
  const [current, setCurrent] = useState(0);
  const [delay, setDelay] = useState(5000);
  const [slide, setSlide] = useState({ prev: '', next: 'active' });
  const { length } = imgSource;
  useInterval(() => {
    setCurrent((cur) => (cur + 1) % length);
    setSlide({ prev: 'active slide-item-left', next: 'slide-item-next slide-item-left' });
    setTimeout(() => (setSlide({ prev: '', next: 'active' })), 600);
  },
  delay);

  function stop() {
    setDelay(99999999999);
  }

  function start() {
    setDelay(5000);
  }

  return length > 0 ? (
    <div className="slider">
      <div className="slider-inner" onMouseEnter={stop} onMouseLeave={start}>
        {
          imgSource.map((src, index) => {
            let activeClass = classNames({
              'slide-item': true,
            });
            if (index === previous(length, current)) activeClass += ` ${slide.prev}`;
            if (index === current) activeClass += ` ${slide.next}`;
            return (
              <div className={`${activeClass}`} key={src.alt}>
                <a href={src.url} target="_blank" rel="noopener noreferrer">
                  <picture>
                    <source srcSet={src.sm} media="(max-width: 400px)" />
                    <source srcSet={src.md} media="(max-width: 768px)" />
                    <source srcSet={src.lg} media="(min-width: 1920px)" />
                    <img src={src.img} alt={src.alt} />
                  </picture>
                </a>
              </div>
            );
          })
        }
      </div>
    </div>
  ) : null;
};

HomeSlides.propTypes = {
  imgSource: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
    img: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
  })).isRequired,
};

export default HomeSlides;
