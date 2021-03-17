import React from 'react';
import './cart-item.styles.scss';


const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <div className='cart-item'>
    
        <img src={imageUrl} alt='item'/>
        <div classame='item-details'>
            <div className='name'>{name}</div>
            <div classname='price'>{quantity} x ${price}</div>
        </div>
    </div>

)


export default CartItem;