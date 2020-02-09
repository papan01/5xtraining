import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../carousel';

const HomeSlides = ({ imgSource }) => (
  <Carousel>
    {
      imgSource.map((src) => (
        <a key={src.img} href={src.url} target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet={src.sm} media="(max-width: 400px)" />
            <source srcSet={src.md} media="(max-width: 768px)" />
            <source srcSet={src.lg} media="(min-width: 1920px)" />
            <img src={src.img} alt={src.alt} />
          </picture>
        </a>
      ))
    }
  </Carousel>
);


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
