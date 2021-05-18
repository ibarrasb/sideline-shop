import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productitem/ProductItem'
import './products.css'

function Products() {
    const state = useContext(GlobalState)
    const [products] = state.ProductsAPI.products

    console.log(products)
    return (
        <div className="products">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product}/>
                })
            }
        </div>
    );
}

export default Products;