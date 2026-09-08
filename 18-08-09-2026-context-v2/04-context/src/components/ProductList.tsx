import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { useState } from "react";
export default function ProductList() {
    const { cartItems, addItem } = useContext(CartContext);
    const [newItem, setNewItem] = useState<string>("");

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input 
                type="text"
                placeholder="Add item to cart"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={() => addItem(newItem)}>Add Item</button>
        </div>
    )
}