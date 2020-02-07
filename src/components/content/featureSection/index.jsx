import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FeatureSection = ({ sectionContent }) => (
  <div className="feature-section light-grey-bg pb-4">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 center-block pb-3">
          <h3 className="text-center mb-5 mt-5 pb-4">
            <span>{sectionContent.title}</span>
          </h3>
        </div>
        <div className="feature-list d-flex text-center flex-wrap">
          {
                sectionContent.navList.map((item) => (
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3" key={item.title}>
                    <Link to={item.url}>
                      <img src={item.img} alt={item.alt} />
                      <h3 className="pt-3">
                        {item.title}
                        <br />
                        {item.subTitle}
                      </h3>
                      <p className="pt-3 pb-3 text-center">{item.content}</p>
                    </Link>
                  </div>
                ))
            }
        </div>
      </div>
    </div>
  </div>
);

FeatureSection.propTypes = {
  sectionContent: PropTypes.shape({
    title: PropTypes.string,
    navList: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      img: PropTypes.string,
      alt: PropTypes.string,
      title: PropTypes.string,
      subTitle: PropTypes.string,
      content: PropTypes.string,
    })),
  }).isRequired,
};

export default FeatureSection;
