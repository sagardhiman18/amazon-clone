import React from 'react';
import './checkoutProduct.css';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../redux/action';

const CheckoutProduct = ({
    id,
    title,
    image,
    price,
    rating
}) => {

    const dispatch = useDispatch();
    const removecart = () => {
        dispatch({type: actionTypes.REMOVECART,
                        id
        });
        //console.log(actionTypes.ADDCART);
    };

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
                    {Array(rating)
                        .fill()
                        .map((_) => (
                        <p>⭐</p>
                    ))}
                </div>

                <Button onClick={removecart}>Remove from basket</Button>
            </div>
        </div>
    );
}

export default CheckoutProduct;