import produce from 'immer';
import reducer from '../reducer'
import {
    addProductToCart,
    addItemQuantity,
    subtractItemQuantity,
    removeCartItem
} from '../action-creators'

describe('cartReducer', () => {
    it('should return the initial state', () => {
        const state = {
            cart: []
        };
        const expectedResult = state;
        expect(reducer(undefined, {})).toEqual(expectedResult);
    });
  
    it('should handle addProductToCart action correctly', () => {
        const state = {
            cart: []
        };
      const product = {
          sku: 'test',
          title: 'test'
      };
      const expectedResult = produce(state, draft => {
        draft.cart = [{ ...product, quantity: 1}];
      });
  
      expect(reducer(state, addProductToCart(product))).toEqual(expectedResult);
    });

    it('should handle addProductToCart action correctly when product is already in cart', () => {
        const state = {
            cart: [{ sku: 'test', quantity: 1, title: 'test' }]
        };
        const product = {
          sku: 'test',
          title: 'test'
        };
      const expectedResult = produce(state, draft => {
        draft.cart = [{ ...product, quantity: 2}];
      });
  
      expect(reducer(state, addProductToCart(product))).toEqual(expectedResult);
    });
    

    it('should handle addItemQuantity action correctly', () => {
        const state = {
            cart: [{ sku: 'test', title: 'test', quantity: 1}]
        };
        const sku = 'test'
        const expectedResult = produce(state, draft => {
          draft.cart = [{ ...state.cart[0], quantity: 2 }];
        });
    
        expect(reducer(state, addItemQuantity(sku))).toEqual(expectedResult);
      });

    it('should handle subtractItemQuantity action correctly', () => {
        const state = {
            cart: [{ sku: 'test', title: 'test', quantity: 2}]
        };
        const sku = 'test'
        const expectedResult = produce(state, draft => {
            draft.cart = [{ ...state.cart[0], quantity: 1 }];
        });

        expect(reducer(state, subtractItemQuantity(sku))).toEqual(expectedResult);
    });

    it('should handle removeCartItem action correctly', () => {
        const state = {
            cart: [{ sku: 'test', title: 'test', quantity: 5}]
        };
        const sku = 'test'
        const expectedResult = produce(state, draft => {
            draft.cart = [];
        });

        expect(reducer(state, removeCartItem(sku))).toEqual(expectedResult);
    });
  });