import React from 'react';
import './subTotal.css';
import Button from '@material-ui/core/Button';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { getCartTotal } from '../../redux/reducer';

const SubTotal = () => {
    const cart = useSelector((store) => store.cart);

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items) : <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order conatin a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <Button variant="outlined"> Proceed To Checkout </Button>
        </div>
    );
};

export default SubTotal;