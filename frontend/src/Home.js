import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {});

  return (
    <div>
      <h1>Hi this is PUBLIC route</h1>
      <Link to='/login'>Login page</Link>
    </div>
  );
};

export default Home;
