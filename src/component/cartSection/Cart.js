import React, {useContext} from 'react';
import { ShopContext } from '../../App';


const Cart = () => {

const [state,] = useContext(ShopContext);

let cartItems = [...state.cart];
 
  return (
    <>
    <header>Shopping Cart</header>
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
        <img src={item.image} alt="item.title" />
        <p>{item.title}</p>
        </div>
      ))}
      </div>
    </>
  )
}

export default Cart;
