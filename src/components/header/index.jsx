import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';

const Header = ({ navList }) => (
  <header className="nav-space">
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-xl navbar-light overwrite-nav">
      <div className="container-fluid nav-border pl-3 pr-3">
        <Link to="/" className="navbar-brand logo-link"><img src="https://5xruby.tw/assets/images/navbar/logo-c473f739.png" alt="網頁設計前後端課程 | 五倍紅寶石" /></Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#mobile-dropdown"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="icon-bar" />
          <div className="icon-bar" />
          <div className="icon-bar" />
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="mobile-dropdown">
          <ul className="navbar-nav">
            {
              navList.map((item, index) => {
                if (index === 0) {
                  return (
                    <li className="nav-item text-center" key={item.url}>
                      <NavLink to={item.url} className="nav-link" activeClassName="active">
                        <span style={{ fontSize: '1em' }}>
                          <i className="far fa-gem" />
                        </span>
                        {' '}
                        {item.label}
                      </NavLink>
                    </li>
                  );
                } if (index === 1) {
                  return (
                    <li className="nav-item text-center" key={item.url}>
                      <NavLink to={item.url} className="nav-link">
                        <span style={{ fontSize: '1em' }}>
                          <i className="far fa-compass fa-lg" />
                        </span>
                        {' '}
                        {item.label}
                        <span className="tag">報名優惠中</span>
                      </NavLink>
                    </li>
                  );
                }
                return (
                  <li className="nav-item text-center" key={item.url}>
                    <NavLink to={item.url} className="nav-link">{item.label}</NavLink>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape(
    {
      label: PropTypes.string,
      url: PropTypes.string,
    },
  )).isRequired,
};

export default Header;
