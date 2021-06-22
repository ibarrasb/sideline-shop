/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useContext} from 'react';
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import './create.css'

const initialState = {
    product_id: '',
    title: '',
    price: 0,
    description: '',
    content: '',
    category: '',

}

function createProduct() {

    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [category] = state.CategoriesAPI.categories
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)


    const styleUpload = {
        display: images ? "block" : "none"
    }



    return (
        <div className="create-product">
            <div className='upload'>
                <input type="file" name="file" id="file-up"/>
                <div id="file-img" style={styleUpload}>
                    <img src="" alt="" />
                    <span>X</span>
                </div>
            </div>
            <form>
                <div className="row">
                    <label htmlFor="product_id"> Product ID</label>
                    <input type="text" name="product_id" id="product_id" required
                    value={product.product_id} />
                </div>

                <div className="row">
                    <label htmlFor="title">title</label>
                    <input type="text" name="title" id="title" required
                    value={product.title} />
                </div>

                <div className="row">
                    <label htmlFor="price">price</label>
                    <input type="number" name="price" id="price" required
                    value={product.price} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required
                    value={product.description} rows="5" />
                </div>

                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" name="content" id="content" required
                    value={product.content} rows="7"/>
                </div>

                <div className="row">
                    <label htmlFor="categories">Category</label>
                    <select name="category" value={product.category}>
                        <option value="">Select Category</option>
                        {
                            category.map(category =>(
                                <option value={category._id} key={category._id}>
                                {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                        <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default createProduct;