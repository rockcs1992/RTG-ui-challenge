const TAX_RATE = 0.1
const BASE_SHIPPING_COST = 50
const SHIPPING_RATE = 0.02
const QUANTITY_DISCOUNT = 5

const DECIMAL_PRECISION = 2

export const toFixed = (number) => {
    if (typeof number !== 'number') return NaN
    return Number(number.toFixed(DECIMAL_PRECISION))
}

export const calculateSubtotalAndQuantity = (cart) =>
    cart.reduce((acc, curr) => {
        acc.quantity += curr.quantity
        acc.subtotal += curr.quantity * curr.price
        return acc
    }, { subtotal: 0, quantity: 0 })

export const calculateTaxAndTotal = (subtotal, quantity) => {
    if (typeof subtotal !== 'number' || typeof subtotal !== 'number') {
        return {
            tax: NaN,
            shippingCost: NaN,
            fixedSubtotal: NaN,
            total: NaN
        }
    }
    const tax = toFixed(subtotal * TAX_RATE)
    const shippingCost = toFixed(BASE_SHIPPING_COST + subtotal * SHIPPING_RATE - QUANTITY_DISCOUNT * quantity)
    const fixedSubtotal = toFixed(subtotal)
    const total = toFixed(tax + shippingCost + fixedSubtotal)
    
    return {
        tax,
        shippingCost,
        fixedSubtotal,
        total
    }
}
