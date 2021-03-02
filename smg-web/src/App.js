import React, { useEffect } from 'react';
import { useLocation, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/shared/header'
import Footer from './components/shared/footer'
import HomePage from './components/home'
import Error404 from './components/error404'
import Facts from './components/facts'
import Contact from './components/contact'
import Testimonials from './components/testimonials'
import Newsletters from './components/newsletters'
import Shop from './components/shop'
import ProductPage from './components/shop/ProductPage'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Category from './components/shop/Category'
import Checkout from './components/shop/checkout/checkout'
import AdminLayout from './layouts/AdminLayout'
import StoreRedirect from './components/StoreRedirect'

import { setCurrentUser } from './store/actions/authActions'
import { setCartAction } from './store/actions/shopActions'

const App = (props) => {
  const {setUser, setCart} = props
  const location = useLocation();
  const path = location.pathname
  const exclude = ['/register', '/login', '/admin']
  const adminHead = ['/admin']

  useEffect(() => {
    setUser(localStorage.getItem('jwtToken'))
    setCart(JSON.parse(localStorage.getItem('smgCartData')))
  }, [])

  if(adminHead.includes(path)) {
    return (
      <AdminLayout />
    )
  } else {
    return (
      <>
        {exclude.includes(path) ? '' : <Header />}
        <Switch location={location}>
          <Route path="/facts" component={Facts} />
          <Route path="/contact" component={Contact} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/newsletters" component={Newsletters} />
          <Route path="/shop/product/:id" component={ProductPage} />
          <Route path="/shop/category/:id" component={Category} />
          <Route path="/shop/checkout" component={Checkout} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/store" exact component={() => <StoreRedirect redirectUrl='http://smgdemo.xyz/store' />} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/api" />
          <Route path="/" exact component={HomePage} />
          <Route path="/**" component={Error404} />
        </Switch>
        {exclude.includes(path) ? '' : <Footer />}
      </>
    )    
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    setUser : (token) => {
      dispatch(setCurrentUser(token))
    },
    setCart : (cart) => {
      dispatch(setCartAction(cart))
    }
  }
}

export default connect(false, MapDispatchToProps)(App)