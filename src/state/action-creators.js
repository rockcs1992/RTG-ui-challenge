import {
    ADD_ITEM_QUANTITY,
    SUBTRACT_ITEM_QUANTITY,
    REMOVE_CART_ITEM,
    ADD_PRODUCT_TO_CART
} from './constants'

export const addItemQuantity = (sku) => ({
    type: ADD_ITEM_QUANTITY,
    sku
})

export const subtractItemQuantity = (sku) => ({
    type: SUBTRACT_ITEM_QUANTITY,
    sku
})

export const removeCartItem = (sku) => ({
    type: REMOVE_CART_ITEM,
    sku
})

export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    product
})
