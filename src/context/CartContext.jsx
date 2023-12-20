import { createContext, useEffect, useState } from "react"

export const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (item, quantity) => {
        const {id, name, price, pic} = item
        const index = cartItems.findIndex(product => product.id === item.id)

        if (index !== -1) {
            const cartItemsCopy = [...cartItems]
            cartItemsCopy[index].quantity += quantity
            cartItemsCopy[index].subTotal = cartItemsCopy[index].quantity * cartItemsCopy[index].price;
            setCartItems(cartItemsCopy);
        } else {
            const newItem = {
                id,
                name,
                price,
                quantity,
                pic,
                subTotal: quantity * price,
              };

            setCartItems([...cartItems, newItem]);
        }
    }

    const removeItem = (id) => {
        const arrayFilter = cartItems.filter( item => item.id !== id );
        setCartItems(arrayFilter);
    }

    const clearCartItems = () => {
        setCartItems([]);
    }

    const handleTotal = () => {
        const total = cartItems.reduce( (acum, item) => acum + item.subTotal, 0 );
        setTotalCartItems(total);
    }

    const handleTotalQuantity = () => {
        const total = cartItems.reduce( (acum, item) => acum + item.quantity, 0);
        setTotalQuantity(total);
     }

    useEffect( () => {
            handleTotal();
            handleTotalQuantity();
     }, [cartItems] )

    const objetValue = {
        cartItems,
        totalCartItems,
        totalQuantity,
        addItem,
        removeItem,
        clearCartItems
    };

  return <CartContext.Provider value={objetValue}> {children} </CartContext.Provider>;
}