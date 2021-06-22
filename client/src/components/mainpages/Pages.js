import React, {useContext} from 'react';
import {Switch, Route } from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory';
import OrderDetails from './history/OrderDetails';
import Categories from './categories/Categories';
import CreateProduct from './createProduct/createProduct';
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'

import {GlobalState} from '../../GlobalState'

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.UserAPI.isLogged
    const [isAdmin] = state.UserAPI.isAdmin
    return (
        <Switch>
            <Route path='/' exact component={Products}/>
            <Route path='/detail/:id' exact component={DetailProduct}/>
            <Route path='/login' exact component={isLogged ? NotFound : Login}/>
            <Route path='/register' exact component={isLogged ? NotFound : Register}/>
            <Route path='/create_product' exact component={isAdmin ? CreateProduct : NotFound}/>
            <Route path='/category' exact component={isAdmin ? Categories : NotFound}/>
            <Route path='/history' exact component={isLogged ? OrderHistory : NotFound}/>
            <Route path='/history/:id' exact component={isLogged ? OrderDetails : NotFound}/>
            <Route path='/cart' exact component={isLogged ? Cart : NotFound}/>

            <Route path='*' exact component={NotFound}/>
        </Switch>
    );
}

export default Pages;