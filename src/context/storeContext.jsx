import React, { useState, createContext } from 'react';
import products from '../elements/products/products';

export const StoreContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < products.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const StoreContextProvider = (props)=>{

    const[cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = products.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount, products, cartItems, addToCart, removeFromCart};
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;