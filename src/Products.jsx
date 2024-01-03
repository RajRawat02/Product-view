import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import { ProductsContext } from "./ProductContext";

const Products = () => {
  const navigate = useNavigate();
  const { addToCart, setProducts ,products, cartItems } = useContext(ProductsContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleViewCart = () => {
    navigate('/cart');
  };

  return (
    <div>
      <div style={{display:'flex','justify-content': 'space-between'}}>
        <div style={{fontSize:'24px'}}>Products</div>
        <div onClick={handleViewCart} style={{cursor:'pointer',fontSize:'24px' }}>View Cart {cartItems?.length}</div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap',cursor:'pointer' }}>
        {
          products.map((product) => (
            <Card
              key={product.id}
              style={{ margin: '10px', width: '300px', cursor: 'pointer' }}
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              <CardMedia
                component="img"
                alt={product.title}
                height="140"
                image={product.image}
                style={{ 'object-fit': 'contain' }}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ height: '100px', overflow: 'hidden' }}
                >
                  {product.description}
                </Typography>
                <Typography variant="h6">${product.price}</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={(event) => {
                    addToCart(product.id, event);
                  }}
                >
                  Add
                </Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Products;
