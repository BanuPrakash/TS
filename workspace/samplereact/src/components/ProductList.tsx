import React, { useEffect, useState } from 'react'
import Product from '../models/Product';
import { Container } from 'react-bootstrap';
import ProductCard from './ProductCard';
import axios from 'axios';
export default function ProductList() {
    let [products, setProducts] = useState<Product[]>();

    useEffect(() => {
        axios.get<Product[]>("https://fakestoreapi.com/products?limit=5")
        .then(response => setProducts(response.data));
    }, []) ; // componentDidMount
  return (
    <Container>
        <div className='row'>
        {
            products && (products.map(product => <ProductCard 
                    key={product.id} 
                    product={product}
                    />))
        }
          </div>
    </Container>
  )
}
