import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Layout from './components/layout/layout';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  </Layout>
);

export default App;
