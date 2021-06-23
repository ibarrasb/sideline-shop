/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import {useHistory, useParams} from 'react-router-dom'
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

    const [isAdmin] = state.UserAPI.isAdmin
    const [token] = state.token

    const history = useHistory()
    const param = useParams()

    const [products] = state.ProductsAPI.products
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.ProductsAPI.callback


    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            products.forEach(product => {
                if(product._id === param.id) {
                    setProduct(product)
                    setImages(product.images)
                }
            })
        }else{
            setOnEdit(false)
            setProduct(initialState)
            setImages(false)
        }
    }, [param.id, products])



    const handleUpload = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) alert("You're not an Admin")
            const file = e.target.files[0]
            if(!file) alert("Please upload a picture")

            if(file.size > 1024 * 1024)
                alert("File size too large")
            if(file.type !== 'image/jpeg' && file.type !== 'image/png')
                alert("File format is incorrect")

                let formData = new FormData()
                formData.append('file', file)
    
                setLoading(true)
                const res = await axios.post('/api/upload', formData, {
                    headers: {'content-type': 'multipart/form-data', Authorization: token}
                })
                setLoading(false)
                setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
        
    }

    const handleDestroy = async () =>{
        try {
            if(!isAdmin) alert("You're not an Admin")
            setLoading(true)
            await axios.post('/api/destroy', {public_id: images.public_id}, {
                headers: {Authorization: token }
            })
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setProduct({...product, [name]:value })
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) alert("You're not an Admin")
            if(!images) alert("No image uploaded")
            if(onEdit){
                await axios.put(`/api/products/${product._id}`, {...product, images}, {
                    headers: {Authorization: token}
                })
            }else{
                await axios.post('/api/products', {...product, images}, {
                    headers: {Authorization: token}
                })
            }
            setCallback(!callback)
            history.push("/")
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }


    return (
        <div className="create-product">
            <div className='upload'>
                <input type="file" name="file" id="file-up" onChange={handleUpload}/>
                {
                    loading ? 
                    <div id="file-img"><Loading/></div>
                    : <div id="file-img" style={styleUpload}>
                    <img src={images ? images.url : ''} alt="" />
                    <span onClick={handleDestroy}>X</span>
                </div>
                }
                
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="product_id"> Product ID</label>
                    <input type="text" name="product_id" id="product_id" required
                    value={product.product_id} onChange={handleChangeInput} disabled={onEdit}/>
                </div>

                <div className="row">
                    <label htmlFor="title">title</label>
                    <input type="text" name="title" id="title" required
                    value={product.title} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="price">price</label>
                    <input type="number" name="price" id="price" required
                    value={product.price} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required
                    value={product.description} rows="5" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" name="content" id="content" required
                    value={product.content} rows="7" onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="categories">Category</label>
                    <select name="category" value={product.category} onChange={handleChangeInput}>
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
                        <button type="submit">{onEdit? "Update" : "Create"}</button>
            </form>
        </div>
    );
}

export default createProduct;