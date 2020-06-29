import React from 'react';

import { Promo } from './components/Promo/Promo';
import { Users } from './components/Users/Users';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Registration } from './components/Registration/Registration';
import { PaddingContainer } from './containers/PaddingContainer';

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
