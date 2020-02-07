import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShowCases = ({ casesContent }) => (
  <div className="showcases pb-4">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-12 col-md-12 center-block mt-5">
          <h3 className="text-center mt-5 pb-4">{casesContent.title}</h3>
          <div className="d-flex flex-wrap">
            {
                casesContent.navList.map((item) => (
                  <div className="showcases-partial col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-4 case" key={item.title}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <div className="lecture-wrap">
                        <img src={item.img} alt={item.title} />
                        <h4 className="rl-padding mt-3 mb-3">{item.title}</h4>
                        <div className="rl-padding">
                          <p className="descri mb-5 text-left">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))
            }
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right mt-3">
              <Link className="text-red" to={casesContent.casesUrl}>{casesContent.moreCases}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ShowCases.propTypes = {
  casesContent: PropTypes.shape({
    title: PropTypes.string,
    moreCases: PropTypes.string,
    casesUrl: PropTypes.string,
    navList: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      img: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
    })),
  }).isRequired,
};

export default ShowCases;
