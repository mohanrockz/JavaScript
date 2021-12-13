import CartItem from '../CartItem/CartItem';

import { Wrapper } from './Cart.styles';


const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <div className="cartborder">
      <h2 id="headings">Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2 id="total">Total: ₹{calculateTotal(cartItems).toFixed(2)}</h2>

      <button className='button1'>Buy</button>
      </div>

    </Wrapper>
  );
};

export default Cart;