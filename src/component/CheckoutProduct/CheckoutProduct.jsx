import React from 'react';
import { useStateValue } from '../../service/StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ image, id, price, rating, title }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={image}
        alt="Checkout Product"
      />

      <div className="checkoutProduct__info">
        <p className="checkoutPorduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
