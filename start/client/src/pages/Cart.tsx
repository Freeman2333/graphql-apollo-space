import { useReactiveVar } from '@apollo/client';
import { RouteComponentProps } from '@reach/router';
import React, { FC } from 'react';
import { cartItemsVar } from '../cache';
import Header from '../components/Header';
import BookTrips from '../containers/BookTrips';
import CartItem from '../containers/CartItem';

interface CartProps extends RouteComponentProps {}

const Cart: FC<CartProps> = () => {
  const cartItems = useReactiveVar(cartItemsVar);

  return (
    <>
      <Header>My Cart</Header>
      {cartItems.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        <>
          {cartItems.map((launchId: any) => (
            <CartItem key={launchId} launchId={launchId} />
          ))}
          <BookTrips cartItems={cartItems || []} />
        </>
      )}
    </>
  );
};

export default Cart;
