import { createContext, useState } from "react";

interface CartContextType {
    cartItems: string[];
    addItem: (item: string) => void;
    removeItem: (item: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
});

interface CartProviderProps {
    children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useState<string[]>([]);
    const addItem = (item: string) => {
        setCartItems([...cartItems, item]);
    }
    const removeItem = (item:string)=>{
        setCartItems(cartItems.filter((i) => i !== item));
    }
    const clearCart = () => {
        setCartItems([]);
    }
    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart }}>{children}</CartContext.Provider>
    )
}


export default CartContext;

