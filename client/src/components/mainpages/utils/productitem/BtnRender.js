import React from 'react';
import {Link} from 'react-router-dom'

function BtnRender({product}) {
    return (
        <div className="row-btn">
            <Link id="btn-buy" to="#!">
                Buy
            </Link>
            <Link id="btn-view" to={`/detail/${product._id}`}>
            View
        </Link>
            
        </div>
    );
}

export default BtnRender