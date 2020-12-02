import React from 'react'
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer'
import { UseStateValue } from './StateProvider'
import './Subtotal.css'

function Subtotal() {

    const [{ basket }] = UseStateValue()
    return (
        <div className="subtotal">
            {/* price */}

            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({basket.length} items): <strong> {`${value}`} </strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" /> 
                        This order contains a gift
                    </small>
                    </>
                )} 
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal
