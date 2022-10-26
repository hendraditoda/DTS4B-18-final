import React, { useEffect, useState } from 'react';
import { Routes as Switch, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

import Home from '../Screens/Home';

const Menu = () => {
  const [hideMenu, setHideMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setHideMenu(false);
    if (pathname === '/login' || pathname === '/register') {
      setHideMenu(true);
    }
  }, [pathname]);

  return <>{!hideMenu && <Navbar />}</>;
};

const Routes = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </>
  );
};

export default Routes;
