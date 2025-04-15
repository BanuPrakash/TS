import React, { useContext } from 'react'
import Product from '../models/Product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/CartContextProvider';


type AppProps = {
    product: Product
}
export default function ProductCard({product}: AppProps) {
    let {addToCart} = useContext(CartContext);
  return (
    <div className='col-md-4'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
       {product.category}
      </Card.Text>
      <Card.Footer>
        Rs. {product.price}
        <Button variant="success" onClick={() => addToCart(product)}>Add to Cart</Button>
      </Card.Footer>
      
    </Card.Body>
  </Card>
  </div>
  )
}
