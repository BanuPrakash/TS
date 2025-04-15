import { CardTitle } from "react-bootstrap"
import Cart from "../models/Cart"
import Product from "../models/Product"

type Action = {
    type: 'ADD_TO_CART',
    payload: Product
} | {type : 'INCREMENT', payload: number} | {type:'CLEAR_CART'}

type CartState = {
    cartItems: Cart[],
    total: number,
    quantity: number
}
export default function cartReducer(state: CartState, action:Action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                cartItems: [...state.cartItems, {...action.payload, qty:1, amount: action.payload.price }],
                total : state.total + action.payload.price,
                quantity: state.quantity + 1
            }
        case 'INCREMENT':
            return state;
        case 'CLEAR_CART':
            return {
                cartItems: [],
                total : 0,
                quantity: 0
            }
        default: return state;
    }
}