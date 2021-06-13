import React, {useContext, useState, useEffect} from 'react';
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import './Cart.css'

function Cart() {

    const state = useContext(GlobalState)
    const cart = state.UserAPI.cart
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const getTotal = () => {
            const total = cart[0].reduce((prev, item) => {
                return prev + (item.price * item.quantity)
                
            }, 0)


            setTotal(total)
        }
        getTotal()

    }, [])

    if(cart[0].length === 0) 
    return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2> 

    console.log(cart.length)
        

    return (
        <div>
        {
        cart[0].map(product => (
            <div className="detail cart">
                <img src={product.images.url} alt="" />
            <div className="box-detail">
                
                <h2>{product.title}</h2>
                <h3>$ {product.price * product.quantity}</h3>
                <p>{product.description}</p>
                <p>{product.content}</p>

                <div className="amount">
                    <button> - </button>
                    <span>{product.quantity}</span>
                    <button> + </button>
                </div>

            
                <div className="delete">X</div>
            
            </div>
        </div>

        ))
        }
        <div className="total">
            <h3>Total: $ {total}</h3>
            <Link to="#!">Payment</Link>
        </div>

        </div>
    )
}

export default Cart;