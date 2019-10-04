import {
    toFixed,
    calculateTaxAndTotal,
    calculateSubtotalAndQuantity
} from "../checkout-helper"

describe("checkout helper", () => {
    describe("toFixed", () => {
        it("should return fixed value", () => {
            expect(toFixed(1.25123)).toBe(1.25)
        })
    
        it("should handle invalid input", () => {
            expect(toFixed('1.25123')).toBe(NaN)
        })
    })

    describe("calculateTaxAndTotal", () => {
        it("should calculate tax and total", () => {
            const ctt = calculateTaxAndTotal(25.99, 2)
            expect(ctt).toEqual({
                fixedSubtotal: 25.99, 
                shippingCost: 40.52, 
                tax: 2.6, 
                total: 69.11
            })
        })
    
        it("should handle invalid input for subtotal for ctt", () => {
            const ctt = calculateTaxAndTotal('25.99', 2)
            expect(ctt).toEqual({
                fixedSubtotal: NaN, 
                shippingCost: NaN, 
                tax: NaN, 
                total: NaN
            })
        })
    
        it("should handle invalid input for quantity for ctt", () => {
            const ctt = calculateTaxAndTotal('25.99', 2)
            expect(ctt).toEqual({
                fixedSubtotal: NaN, 
                shippingCost: NaN, 
                tax: NaN, 
                total: NaN
            })
        })
    
        it("should handle invalid input for both ctt params ", () => {
            const ctt = calculateTaxAndTotal('25.99', '2')
            expect(ctt).toEqual({
                fixedSubtotal: NaN, 
                shippingCost: NaN, 
                tax: NaN, 
                total: NaN
            })
        })
    })

    describe("calculateSubtotalAndQuantity", () => {
        it("should calculate subtotal and quantity", () => {
            const cart = [
                {
                    price: 2,
                    quantity: 3
                },
                {
                    price: 4,
                    quantity: 2
                }
            ]
            const { subtotal, quantity } = calculateSubtotalAndQuantity(cart)
            expect(subtotal).toBe(14)
            expect(quantity).toBe(5)
        })
    })
})
