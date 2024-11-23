import React, { useEffect, useState } from 'react'
import SecondaryHeader from '../Components/SecondaryHeader';
import Header from '../Components/Header';
import LoginForm from '../Components/LoginForm';

const Login = () => {
    const [scrollY, setScrollY] = useState(0);
  const [makeup, setMakeup] = useState([]);
  const threshold = 1; // The scroll value to switch components

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='login-page-container' style={{ display: 'flex', flexDirection: 'column' }}>
        {scrollY > threshold ? <SecondaryHeader/> : <Header/>}
      </div>

      <LoginForm></LoginForm>
    </>
  )
}

export default Login