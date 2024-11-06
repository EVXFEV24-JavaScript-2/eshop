import "../styles/ProductCart.css";
import { CartItem } from "./CartItem";

export function ProductCart({
  toggleCartVisibility,
  cart,
  clearCart,
  removeProductFromCart,
  modifyCartItemAmount,
}) {
  let totalPrice = 0;
  for (let item of cart) {
    totalPrice += item.product.price * item.amount;
  }

  return (
    <div className="product-cart-wrapper">
      <div className="product-cart-header">
        <h2>My cart ({cart.length})</h2>
        <button onClick={clearCart}>Clear cart</button>
        <button onClick={toggleCartVisibility}>Close</button>
      </div>

      <div>
        {cart.map((item) => (
          <CartItem
            cartItem={item}
            removeProductFromCart={removeProductFromCart}
            modifyCartItemAmount={modifyCartItemAmount}
          />
        ))}
      </div>

      <div style={{ marginTop: "auto" }}>
        <span>${totalPrice}</span>
        <button>Go to purchase</button>
      </div>
    </div>
  );
}
