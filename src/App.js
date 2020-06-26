import React from 'react';
import './App.css';
import { Promo } from './components/Promo/Promo';
import { Users } from './components/Users/Users';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Registration } from './components/Registration/Registration';

function App() {
  return (
    <>
      <Promo />
      <AboutUs />
      <Users />
      <Registration />
      {/* <Footer /> */}
    </>
  );
}

export default App;
