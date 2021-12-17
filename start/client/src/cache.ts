import { InMemoryCache, makeVar, Reference } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
      },
    },
  },
});

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'));
export const cartItemsVar = makeVar([]);
