import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContext from '../context/index';
import Header from '../components/header';
import HeaderSetting from '../components/header/constants.json';
import Footer from '../components/footer';
import footerSetting from '../components/footer/constants.json';
import './style/style.scss';


const Layout = ({ children }) => {
  const [user, setUser] = useState({ name: '', tel: '', phone: '' });
  return (
    <Router basename="/5xtraining">
      <UserContext.Provider value={{ ...user, setUser }}>
        <Header navList={HeaderSetting.navList} />
        <div className="main_content">
          {children}
        </div>
        <Footer navList={footerSetting.navList} info={{ ...footerSetting }} />
      </UserContext.Provider>
    </Router>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
