import React from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext({
  name: '', tel: '', email: '', setUser: () => {},
});

UserContext.Provider.propTypes = {
  name: PropTypes.string,
  tel: PropTypes.string,
  email: PropTypes.string,
};

export default UserContext;
