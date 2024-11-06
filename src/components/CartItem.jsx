export function CartItem({
  cartItem,
  removeProductFromCart,
  modifyCartItemAmount,
}) {
  const { product, amount } = cartItem;

  let price = product.price * amount;

  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.thumbnail} width="50px" height="50px" />
      <span>Amount: {amount}</span>
      <br />
      <span>Price: ${price.toFixed(2)}</span>
      <br />
      <button onClick={() => modifyCartItemAmount(product.id, 1)}>+</button>
      <button onClick={() => modifyCartItemAmount(product.id, -1)}>-</button>
      <button onClick={() => removeProductFromCart(product.id)}>X</button>
    </div>
  );
}
