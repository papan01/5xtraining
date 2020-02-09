import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../carousel';

const AvatarCarousel = ({ avatarContent }) => (
  <div className="avatar-carousel light-grey-bg pb-5">
    <h3 className="section-title text-center mb-4 pt-5 pb-4">
      {avatarContent.title}
    </h3>
    <Carousel wrapperClass="container mt-5">
      {
            avatarContent.avatars.map((src) => (
              <div key={src.alt} className="d-flex flex-nowrap no-gutters mx-auto justify-content-center">
                <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                  <img src={src.img} className="d-block" alt={src.alt} />
                </div>
                <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                  <p className="d-block statement">
                    {src.content}
                    <br />
                    <span className="d-block text-red large mt-3">{src.name}</span>
                    <span className="d-block text-grey">{src.title}</span>
                  </p>
                </div>
              </div>
            ))
        }
    </Carousel>
  </div>
);


AvatarCarousel.propTypes = {
  avatarContent: PropTypes.shape({
    title: PropTypes.string,
    avatars: PropTypes.arrayOf(PropTypes.shape({
      img: PropTypes.string,
      alt: PropTypes.string,
      content: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
    })),
  }).isRequired,
};

export default AvatarCarousel;
