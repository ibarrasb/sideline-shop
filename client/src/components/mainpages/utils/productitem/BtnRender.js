import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({product}) {
    const state = useContext(GlobalState)

    const [isAdmin] = state.UserAPI.isAdmin
    return (
        <div className="row-btn">
        {
            isAdmin ? 
            <div>
                <Link id="btn-buy" to="#!">
                    Delete
                </Link>
                <Link id="btn-view" to={`/edit_product/${product._id}`}>
                    Edit
                </Link>
            </div>
            : <div>
                <Link id="btn-buy" to="#!">
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