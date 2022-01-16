import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../components/main';
import Map from '../components/maps';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
