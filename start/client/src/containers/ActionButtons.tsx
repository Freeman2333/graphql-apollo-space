import { useReactiveVar } from '@apollo/client';
import React, { FC } from 'react';
import { cartItemsVar } from '../cache';
import Button from '../components/button';

interface ActionButtonProps {
  isBooked: boolean;
  id: any;
}

const ToggleTripButton: FC<any> = ({ id }) => {
  const cartItems: any = useReactiveVar(cartItemsVar);
  const isInCart = id ? cartItems.includes(id) : false;
  return (
    <>
      <Button
        onClick={() => {
          if (id) {
            cartItemsVar(
              isInCart
                ? cartItems.filter((itemId: string) => itemId !== id)
                : [...cartItems, id]
            );
          }
        }}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </Button>
    </>
  );
};

const ActionButton: FC<ActionButtonProps> = ({ isBooked, id }) => {
  return <>{isBooked ? 'nema' : <ToggleTripButton id={id} />}</>;
};

export default ActionButton;
