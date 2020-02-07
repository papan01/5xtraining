import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const KnowAboutUs = ({ aboutUsContent }) => (
  <div className="know-about-us">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h3 className="text-center mt-3 mb-2">想更瞭解我們嗎？</h3>
          <p className="text text-center mb-4 mt-4">
            您可以看看
            <Link className="text-red" to="/faq">常見問題</Link>
            或者直接
            <Link className="text-red" to="/contacts">線上洽詢</Link>
            ，會有親切的客服人員回答您的問題，
            <br />
            也可以透過社群網站隨時關注我們的動態。
          </p>
        </div>
        <div className="social-btn bottom-spacing-lg mx-auto mb-5">
          {
              aboutUsContent.rrssb.map((item) => (
                <a href={item.url} key={item.alt} className="rl-spacing mx-4">
                  <img src={item.img} alt={item.alt} />
                </a>
              ))
          }
        </div>
      </div>
    </div>
  </div>
);

KnowAboutUs.propTypes = {
  aboutUsContent: PropTypes.shape({
    rrssb: PropTypes.arrayOf(PropTypes.shape(
      {
        url: PropTypes.string,
        img: PropTypes.string,
        alt: PropTypes.string,
      },
    )),
  }).isRequired,
};

export default KnowAboutUs;
