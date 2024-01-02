import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { productActions } from './_store';

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/products`)
  //     .then((response) => {
  //       setProducts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching products:', error);
  //     });
  // }, []);

  const { products } = useSelector((x) => x.products);

  useEffect(() => {
    dispatch(productActions.getAll());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = (productId, event) => {
    // Implement logic to add the product to the cart
    const updatedCart = [...cart, { productId, quantity: 1 }];
    setCart(updatedCart);
    event.stopPropagation();
  };

  const removeFromCart = (productId, event) => {
    // Implement logic to remove the product from the cart
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    event.stopPropagation();
  };

  const getProductQuantity = (productId) => {
    const cartItem = cart.find((item) => item.productId === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.length &&
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
                <Typography variant="body2" color="text.secondary">
                  Quantity: {getProductQuantity(product.id)}
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={(event) => {
                    removeFromCart(product.id, event);
                  }}
                  className="mr-2"
                >
                  Remove
                </Button>
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
        {products.loading && (
          <div className="spinner-border spinner-border-sm"></div>
        )}
        {products.error && (
          <div className="text-danger">
            Error loading users: {users.error.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
