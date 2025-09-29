import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);



const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});



    const addToCart = (itemId) => {

    //    Checks if the item is not already in the cart.
    //    If the item is missing (or its value is 0, undefined, null, etc.):
    //    Add it to the cart with a quantity of 1.
        if(!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            // If the item already exists in cartItems, increase its quantity by 1.
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }


//     prev refers to the previous cart state (cartItems).
//     ...prev copies all existing items in the cart.
//    [itemId]: prev[itemId] - 1 sets a new value for the specified itemId, reducing it by 1.
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }




    const contextValue = {
        food_list
    } 
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider





