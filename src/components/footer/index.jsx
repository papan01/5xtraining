import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import ScrollToTop from '../scrollToTop';
import './style.scss';

const Footer = ({ navList, info }) => (
  <footer className="overwrite-footer light-grey-bg mt-5">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3">
          <Link to="/press" className="d-block mb-3 press-img">
            <img src="https://5xruby.tw/assets/images/footer/press-img-3161693e.png" loading="lazy" title="媒體報導" alt="媒體報導" />
          </Link>
          <a href="https://www.cakeresume.com/jobs" className="d-block cakeresume press-img">
            <img
              src="https://5xruby.tw/assets/images/footer/cakeresume-8938f367.png"
              title="CakeResume 找工作"
              alt="CakeResume 找工作"
              loading="lazy"
              style={{ maxWidth: '180px', marginBottom: '10px', paddingRight: '6px' }}
            />
            <span className="text-muted">找工作</span>
          </a>
        </div>
        <div className="col-12 col-md-9">
          <div className="row">
            <div className="col-12 mt-3 mt-md-0">
              <div className="footer-nav">
                {navList.map((item) => (
                  <h5 key={item.url}><NavLink to={item.url}>{item.label}</NavLink></h5>
                ))}
              </div>
            </div>
            <div className="col-12 mt-4">
              <div className="row">
                <div className="col-12 col-md-4 col-xl-3">
                  <div className="contact-info">
                    <strong className="large text-danger">{info.tel}</strong>
                    <br />
                    <small>{info.openingHours}</small>
                    <br />
                    {
                    info.rrssb.map((item) => (
                      <a
                        href={item.url}
                        key={item.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                      >
                        <i className={`media-icon ${item.iconClassName}`} />
                      </a>
                    ))
                    }
                  </div>
                </div>
                <div className="col-12 col-md-8 col-xl-9 mt-3 mt-md-0">
                  <div className="mail-address">
                    <p>有任何問題?</p>
                    <a href={`mailto:${info.mail}`}>{info.mail}</a>
                    <br />
                    <p>
                      地址：
                      <a href={info.address.map} target="_blank" rel="noopener noreferrer">{info.address.location}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-5">
          <div className="contact-info text-center">
            {
                 info.copyright.map((item) => (
                   <p key={item}>{item}</p>
                 ))
             }
          </div>
        </div>
      </div>
    </div>
    <ScrollToTop />
  </footer>
);


Footer.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape(
    {
      label: PropTypes.string,
      url: PropTypes.string,
    },
  )).isRequired,
  info: PropTypes.shape(
    {
      rrssb: PropTypes.arrayOf(PropTypes.shape(
        {
          label: PropTypes.string,
          iconClassName: PropTypes.string,
          url: PropTypes.string,
        },
      )),
      tel: PropTypes.string,
      openingHours: PropTypes.string,
      question: PropTypes.string,
      mail: PropTypes.string,
      address: PropTypes.shape(
        {
          location: PropTypes.string,
          map: PropTypes.string,
        },
      ),
      copyright: PropTypes.arrayOf(PropTypes.string),
    },
  ).isRequired,
};

export default Footer;
