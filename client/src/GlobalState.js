import axios from 'axios'
import React, {createContext, useEffect, useState} from 'react'
import ProductsAPI from './api/ProductsAPI'
import UserAPI from './api/UserAPI'
import CategoriesAPI from './api/CategoriesAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)

        
    useEffect(() =>{
        const firstlogin = localStorage.getItem('firstlogin')
        if(firstlogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')
                setToken(res.data.accesstoken)
    
                setTimeout(() => {
                    refreshToken()
                }, 10 * 60 * 1000)
            }      
            refreshToken()
        }
    }, [])

const state = {
    token: [token, setToken],
    ProductsAPI: ProductsAPI(),
    UserAPI: UserAPI(token),
    CategoriesAPI: CategoriesAPI()
}
    return (
        <GlobalState.Provider value={state}>
        {children}
        </GlobalState.Provider>
    )
}