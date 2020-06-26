import React from 'react';
import './App.css';
import { Promo } from './components/Promo/Promo';
import { Users } from './components/Users/Users';
import { AboutUs } from './components/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Promo />
      <AboutUs />
      <Users />
      {/* <RegistrationForm />
      <Footer /> */}
    </>
  );
}

export default App;
