import React from 'react';
import CartItem from '../cart-item'
import { ADD_ITEM_QUANTITY, SUBTRACT_ITEM_QUANTITY, REMOVE_CART_ITEM } from '../../../state/constants'
import { render, fireEvent} from '@testing-library/react'

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    useDispatch: ()=> mockDispatch,
    useSelector: () => [{ quantity: 1, price: 2}]
}));

describe('cart-checkout', () => {
    const item = {
        image: 'testurl',
        title: 'test',
        price: 1,
        quantity: 1,
        sku: 'test01'
    }
    it ('should render correctly', () => {
        const tree = render(
            <CartItem item={item} />,
        );
        expect(tree).toMatchSnapshot()
    })
    it ('should call ADD_ITEM_QUANTITY on button click', () => {
        const { getByText } = render(
            <CartItem item={item} />,
        );
        fireEvent.click(getByText('+'))
        expect(mockDispatch).toHaveBeenCalledWith({
            sku: 'test01',
            type: ADD_ITEM_QUANTITY
        })
    })
    it ('should call SUBTRACT_ITEM_QUANTITY on button click', () => {
        const { getByText } = render(
            <CartItem item={item} />,
        );
        fireEvent.click(getByText('-'))
        expect(mockDispatch).toHaveBeenCalledWith({
            sku: 'test01',
            type: SUBTRACT_ITEM_QUANTITY
        })
    })
    it ('should call REMOVE_CART_ITEM on button click', () => {
        const { getByText } = render(
            <CartItem item={item} />,
        );
        fireEvent.click(getByText('remove'))
        expect(mockDispatch).toHaveBeenCalledWith({
            sku: 'test01',
            type: REMOVE_CART_ITEM
        })
    })
})