import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({product, deleteProduct}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.UserAPI.isAdmin
    const addCart = state.UserAPI.addCart

    return (
        <div className="row-btn">
        {
            isAdmin ? 
            <div>
                <Link id="btn-buy" to="#!"
                onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                    Delete
                </Link>
                <Link id="btn-view" to={`/edit_product/${product._id}`}>
                    Edit
                </Link>
            </div>
            : <div>
                <Link id="btn-buy" to="#!" onClick={ () => addCart(product)}>
                    Buy
                </Link>
                <Link id="btn-view" to={`/detail/${product._id}`}>
                View
                </Link>
            </div>
        }
            
            
        </div>
    );
}

export default BtnRender