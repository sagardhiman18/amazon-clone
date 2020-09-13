import React from 'react';
import './product.css';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';

const Product = ({
    id,
    title,
    image,
    price,
    rating
}) => {
    return (
        <div className="product">
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
            <Button>Add to basket</Button>
        </div>
    );
}

export default Product;