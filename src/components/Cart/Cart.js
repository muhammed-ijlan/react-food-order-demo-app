import React from 'react'
import classes from './Cart.module.css'
import Model from '../UI/Model'

function Cart(props) {
    const cartItems = <ul className={classes['cart-items']}>{[{ id: 'c1', name: 'sushi', amount: '2', price: '21.99' }].map(item => <li>{item.name}</li>)}</ul>

    return <Model onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>43.32</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Model>
}

export default Cart