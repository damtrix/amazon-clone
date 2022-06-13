import React from 'react';
import { useStateValue } from '../../service/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user ? user.email : 'Guest'}</h3>
          <h1 className="checkout__title">Your shopping Basket</h1>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              price={item.price}
              title={item.title}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
