import React, {useContext, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'

function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.ProductsAPI.products
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() => {
        if(params){
            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params, products])

    if(detailProduct.length === 0) return null;
    
    return (
        <div className="detail">
            <img src={detailProduct.images.url} alt="" />
            <div className="box-detail">
                <div className="row">
                    <h2>{detailProduct.title}</h2>
                    <h6>{detailProduct.product_id}</h6>
                </div>
                <span>$ {detailProduct.price}</span>
                <p>{detailProduct.description}</p>
                <p>{detailProduct.content}</p>
                <p>Sold: {detailProduct.sold}</p>
            
            </div>
        </div>
    );
}

export default DetailProduct