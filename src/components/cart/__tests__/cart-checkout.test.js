import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Checkout from '../cart-checkout'
import { render } from '@testing-library/react'

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn()
}));

describe('cart-checkout', () => {
    it ('should render with cart items', () => {
        useSelector.mockReturnValueOnce([{ quantity: 1, price: 2 }])
        useDispatch.mockReturnValueOnce({})
        const wrapper = render(
            <Checkout />,
        );
        expect(wrapper).toMatchSnapshot()
    })
    it ('should not render without cart items', () => {
        useSelector.mockReturnValueOnce([])
        useDispatch.mockReturnValueOnce({})
        const wrapper = render(
            <Checkout />,
        );
        expect(wrapper).toMatchSnapshot()
    })
})