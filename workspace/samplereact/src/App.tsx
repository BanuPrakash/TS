import React, { useContext } from 'react';

import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import { CartContext } from './context/CartContextProvider';
import { Badge } from 'react-bootstrap';
function App() {
  let {quantity} = useContext(CartContext)
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShopApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="/products">Products</Nav.Link>
            <Nav.Link as={Link} to ="/cart"><Badge>{quantity}</Badge> Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/products' element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
