import {
    ADD_ITEM_QUANTITY,
    SUBTRACT_ITEM_QUANTITY,
    REMOVE_CART_ITEM,
    ADD_PRODUCT_TO_CART
} from './constants'
import produce from 'immer'

export const initialState = {
    cart: []
  }

const reducer = produce((draft = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_CART: {
            const addedItem = {
                ...action.product,
                quantity: 1
            }
            const index = draft.cart.findIndex((item) => item.sku === action.product.sku)
            if (index !== -1) {
                draft.cart[index].quantity++
            } else {
                draft.cart.push(addedItem)
            }
            break
        }
        case REMOVE_CART_ITEM: {
            draft.cart = draft.cart.filter((item) => item.sku !== action.sku)
            break
        }
        case ADD_ITEM_QUANTITY: {
            draft.cart = draft.cart.map((item) => {
                if (item.sku === action.sku) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            break
        }
        case SUBTRACT_ITEM_QUANTITY: {
            const index = draft.cart.findIndex((item) => item.sku === action.sku)
            if (index !== -1) {
                const quantity = draft.cart[index].quantity
                if (quantity <= 1) draft.cart.splice(index, 1)
                else draft.cart[index].quantity--
            }
            break
        }
        default: return draft
    }
})

export default reducer