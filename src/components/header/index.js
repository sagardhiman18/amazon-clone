import React from 'react';
import './header.css';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    const history = useHistory();
    const cart = useSelector((store) => store.cart);
    console.log(cart);
    return (
        <nav className="header">
            <img 
                className="amazon_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon_logo" onClick={() => history.push('/')}
            />

            <div className="header_center">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_right">
                <div className="header_options" style={{ cursor: "pointer" }}>
                    <span className="header_options_lineOne">Hello</span>
                    <span className="header_options_lineTwo" 
                          onClick={() => history.push('/login')}
                          >
                        Sign In
                    </span>
                </div>
                <div className="header_options" style={{ cursor: "pointer" }}>
                    <span className="header_options_lineOne">Returns</span>
                    <span className="header_options_lineTwo">& Orders</span>
                </div>
                <div className="header_options" style={{ cursor: "pointer" }}>
                    <span className="header_options_lineOne">Your</span>
                    <span className="header_options_lineTwo">Prime</span>
                </div>
                <div className="header_options_basket">
                    <ShoppingBasketIcon onClick={() => history.push('/checkout')} />
                    <span className="header_options_lineTwo header_basketCount">{ cart.length }</span>
                </div>
            </div>
        </nav>
    );
}

export default Header;