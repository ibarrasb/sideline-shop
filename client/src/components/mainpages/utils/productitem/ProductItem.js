import React from 'react';
import {Link} from 'react-router-dom'
import './productitem.css'
import BtnRender from './BtnRender'

function ProductItem({product, isAdmin}) {
    return (
        <div className="product-card">
        {
            isAdmin && <input type="checkbox" checked={product.checked}></input>
        }
            <img src={product.images.url} alt="" />
            <div className="product-box">
            <h2 title={product.title}>{product.title}</h2>
            <span>${product.price}</span>
            <p>{product.description}</p>
            </div>

            <BtnRender product={product}  />
        </div>
    );
}

export default ProductItem;