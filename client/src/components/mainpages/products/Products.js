import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productitem/ProductItem'
import './products.css'
import Loading from '../utils/loading/Loading'

function Products() {
    const state = useContext(GlobalState)
    const [products] = state.ProductsAPI.products
    const [isAdmin] = state.UserAPI.isAdmin

    console.log(products)
    return (
        <>
        <div className="products">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product}
                    isAdmin={isAdmin}/>
                })
            }
        </div>
        
        {products.length === 0 && <Loading/>}

        </>
    );
}

export default Products;