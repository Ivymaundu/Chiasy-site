// import { useState } from "react";
import Product from "./Products.tsx"

interface Product {
    id: number;
    product_name: string;
    product_price: number;
    image_url: string;
  }
  
interface CartProps {
    cart: Product[]; // Assuming Product is defined as an interface or type
    setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Cart: React.FC<CartProps> = ({ cart ,setCart}) => {
    console.log("Cart props:", cart);

    // Calculate total price
    const totalPrice: number = cart.reduce((total, product) => total + product.product_price, 0);

    const removeItem = (productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
      };
    return (
        <article>
            {cart.map((product) => (
                <div className="cart-box">
                    <div className="cart-img">
                    <img src={product.image_url} alt={product.product_name} />
                    <p>{product.product_name}</p>
                </div>
                
                <div>
                <button>+</button>
                <button>-</button>
                </div>
                <div>
                    <span>{product.product_price}</span>
                    <button onClick={() => removeItem(product.id)}>Remove Item</button>
                </div>
                </div>
            ))}
            <div>
                <span>Total Price</span>
                <span>Sh. {totalPrice} $</span>
            </div>
        </article>
    );
};

export default Cart;
