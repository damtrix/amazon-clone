import React from 'react'
import './CheckoutProduct.css'
import { UseStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {

    const [, dispatch ] = UseStateValue()


    const removeFromBasket = () => {
        //remove item from basket...
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id
        })

    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p> 

                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>*</p>
                        )
                        )
                    }
                </div>
                
                <button onClick={removeFromBasket}>From the Basket</button> 
            </div>
            
        </div>
    )
}

export default CheckoutProduct
