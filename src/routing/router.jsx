import React from "react";
import { Routes, Route } from 'react-router-dom';
import ProductsList from '../components/ProductsList/ProductsList';
import ProductPage from '../components/ProductPage/ProductPage.types';
import Cart from '../components/Cart/Cart';

function Routing() {
  return (
    <Routes>
      <Route
        path='/'
        element={<ProductsList />}
      />
      <Route
        path='/cart'
        element={<Cart />}
      />
      <Route
        path='/product/:id'
        element={<ProductPage />}
      />
    </Routes>
  );
}

export default Routing;
