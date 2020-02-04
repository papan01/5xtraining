import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Data from './constants.json';

const HeaderWapper = ({ navList }) => (
  <header className="nav-space">
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-xl navbar-light overwrite-nav">
      <div className="container-fluid nav-border pl-3 pr-3">
        <Link to="/"><img src="https://5xruby.tw/assets/images/navbar/logo-c473f739.png" alt="網頁設計前後端課程 | 五倍紅寶石" /></Link>
        <button
          type="button"
          className="navbar-toggle"
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
              navList.map((item) => (
                <li className="nav-item text-center" key={item.url}>
                  <NavLink to={item.url}>{item.label}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

HeaderWapper.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape(
    {
      label: PropTypes.string,
      url: PropTypes.string,
    },
  )).isRequired,
};

const Header = () => (
  <HeaderWapper navList={Data.navList} />
);

export default Header;
