import { useEffect, useState } from 'react';
import * as Styled from '../Home/styles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Product from '../Product';
import Navbar from '../../components/Navbar';
import Info from '../Info';
import NotFound from '../NotFound';
import SearchForm from '../../components/SearchForm';
import Search from '../Search';
import Perfil from '../Perfil';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="/search" element={<Search />} />
          <Route path="/company" element={<Navigate to="/about" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
