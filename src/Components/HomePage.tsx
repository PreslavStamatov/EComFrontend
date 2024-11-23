import React, { useEffect } from 'react'
import { homePageAPI } from '../Services/AuthService';

const HomePage = () => {

  useEffect(() => {
    const data = homePageAPI();
    console.log(data);
  }, []);

  return (
    <>
    <div>HomePage</div>
    </>
  )
}

export default HomePage