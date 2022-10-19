import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notfound from './pages/Notfound/notfound';
import Propos from './pages/Propos/propos';
import Product from './pages/Product/product';
import Home from './pages/Home/home';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { createGlobalStyle } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = createGlobalStyle`
*{
  font-family : 'Montserrat', sans-serif;
}
`

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/a-propos" element={<Propos />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);


