/* eslint-disable react/no-array-index-key */
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

const Carousel = ({ children, wrapperClass }) => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [delay, setDelay] = useState(5000);
  const [isSliding, setIsSliding] = useState(false);
  const [prevClass, setPrevClass] = useState('');
  const [nextClass, setNextClass] = useState('active');
  const { length } = children;
  useInterval(() => {
    setCurrent((cur) => (cur + 1) % length);
    setPrev(previous(length, current + 1));
    setPrevClass('active slide-item-left');
    setNextClass('slide-item-next slide-item-left');
    setTimeout(() => {
      setPrevClass('');
      setNextClass('active');
    }, 600);
  },
  delay);

  function stop() {
    setDelay(99999999999);
  }

  function start() {
    setDelay(5000);
  }

  function sliding(index) {
    setIsSliding(true);
    setCurrent(index);
    setPrev(current);
    if (index < current) {
      setPrevClass('active slide-item-right');
      setNextClass('slide-item-next slide-item-right');
    } else {
      setPrevClass('active slide-item-left');
      setNextClass('slide-item-next slide-item-left');
    }
    setTimeout(() => {
      setPrevClass('');
      setNextClass('active');
      setIsSliding(false);
    }, 600);
  }

  function slideTo(index) {
    if (index === current) return;
    if (isSliding) {
      setTimeout(() => {
        sliding(index);
      }, 300);
    } else {
      sliding(index);
    }
  }

  return length > 0 ? (
    <div className="slider" onMouseEnter={stop} onMouseLeave={start}>
      <div className="slider-indicators pr-0">
        {
          children.map((_, index) => (index === current
            ? <div key={index} role="button" className="active" onClick={() => slideTo(index)} tabIndex={index} onKeyDown={() => {}} aria-label="select slide" />
            : <div key={index} role="button" onClick={() => slideTo(index)} tabIndex={index} onKeyDown={() => {}} aria-label="select slide" />))
        }
      </div>
      <div className="slider-inner">
        <div className={wrapperClass}>
          {
          children.map((src, index) => {
            let activeClass = classNames({
              'slide-item': true,
            });
            if (index === prev) activeClass += ` ${prevClass}`;
            if (index === current) activeClass += ` ${nextClass}`;
            return (
              <div className={`${activeClass}`} key={index}>
                {src}
              </div>
            );
          })
        }
        </div>
      </div>
    </div>
  ) : null;
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  wrapperClass: PropTypes.string,
};

Carousel.defaultProps = {
  wrapperClass: '',
};

export default Carousel;
