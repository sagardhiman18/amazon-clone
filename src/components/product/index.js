import React from 'react';
import './product.css';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../redux/action';
const Product = ({
    id,
    title,
    image,
    price,
    rating
}) => {

    const dispatch = useDispatch();
    const addcart = () => {
        dispatch({type: actionTypes.ADDCART,
                    item: {
                        id,
                        title,
                        image,
                        price,
                        rating
                    },
        });
        //console.log(actionTypes.ADDCART);
    };
    return (
        <div className="product" key={id}>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="product_image" />
            <Button onClick={addcart}>Add to basket</Button>
        </div>
    );
}

export default Product;