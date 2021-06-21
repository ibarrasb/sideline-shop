import axios from 'axios';
import {useState, useEffect} from 'react';

function CategoriesAPI() {

    //admin able to create categories from user profile
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async() => {
            const res = await axios.get('/api/category')
            setCategories(res.data)
        }
        getCategories()
    }, [])

    return {
        categories: [categories, setCategories]
    }
}

export default CategoriesAPI;