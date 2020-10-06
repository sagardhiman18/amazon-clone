import React from 'react';
import './checkout.css';
import Header from '../../components/header';
import CheckoutProduct from '../../components/checkoutProduct';
import SubTotal from '../../components/subTotal';
import { useSelector } from 'react-redux';

const CheckOut = () => {
    
    const cart = useSelector((store) => store.cart);
    console.log(cart);
    return (
        <>
        <Header/>
        <div className="checkout">
            
            <div className="checkout_left">
                
                {
                    cart.length === 0 ? (
                        <div>
                            <h2>Your shopping cart is empty</h2>
                        </div>
                    ) : (
                        <div>
                            
                            <h2 className="checkout_title">Your shopping cart products</h2>
                            {
                                
                                cart.map((item, index) => {
                                    return (
                                        <CheckoutProduct key={index}
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                        />
                                    );
                                })
                            }
                        </div>
                    )
                }
            </div>
            {
                cart.length > 0 && (
                    <div className="checkout_right">
                        <h1>SubTotal</h1>
                        <SubTotal />
                    </div>
                )
            }
  
        </div>
        </>
    );
}

export default CheckOut;