import { createContext, useReducer } from "react";
import Cart from "../models/Cart";
import cartReducer from "../reducers/cartReducer";
import Product from "../models/Product";

type ContextType = {
    cartItems: Cart[],
    total: number,
    quantity: number,
    addToCart: (product:Product) => void
}
const CartContext = createContext<ContextType>({
    cartItems: [],
    total: 0,
    quantity: 0,
    addToCart: (product:Product) => {}
});

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
} 

export {CartContext}

type AppProps = {
    children: React.ReactNode
}
export default function CartContextProvider({children}: AppProps) {
    let [state, dispatch] = useReducer(cartReducer, initialState);

    function addToCart(product: Product) {
        dispatch({type:'ADD_TO_CART', payload: product})
    }
    return <CartContext.Provider value={{...state, addToCart}}>
        {children}
    </CartContext.Provider>
}