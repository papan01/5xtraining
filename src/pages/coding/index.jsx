import React, { useContext } from 'react';
import UserContext from '../../context';

const IAmCoding = () => {
  const userContext = useContext(UserContext);
  return userContext.name ? (
    <div>
      Hi，
      {userContext.name}
      ，這裡是線上課程
    </div>
  ) : <div>Hi，這裡是線上課程</div>;
};

export default IAmCoding;
