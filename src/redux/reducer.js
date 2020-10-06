import {ADDCART, REMOVECART} from './action';
const INITIAL_STATE = {
    cart: [],
    user: null,
};

export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state = INITIAL_STATE, action) => {
    console.log(action.id);
    switch (action.type) {
        case ADDCART:
            return {
                ...state, 
                cart: [...state.cart, action.item]
            };
        case REMOVECART:
            let newCart = [...state.cart];

            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(`Can not remove product id : ${action.id} as it is not valid`);
            }
            
            return {
                state,
                cart: newCart,
            };
        default:
            return state;
    }
};

export default reducer;