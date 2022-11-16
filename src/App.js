import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/client/HomePage/index';
import BlogPage from './pages/client/BlogPage/index';
import ShopPage from './pages/client/ShopPage/index';
import React from 'react';
import './App.css';

import MainClientPage from './pages/client';
import BlogDetail from 'pages/client/BlogPage/BlogDetail';
import ProductDetail from 'pages/client/ShopPage/ProductDetail';
import { productCarts } from 'redux/cart/selector';
import { useSelector } from 'react-redux';
import Login from 'pages/client/LoginPage';
import SignUp from 'pages/client/RegisterPage';
import ContactUs from 'pages/client/ContactUsPage';
import Treatment from 'pages/client/Treatment/Treatment';
import Navigation from 'pages/admin/AdminNav';
import PrivateRoute from 'routes/PrivateRoute';
import Dashboard from 'pages/admin/Dashboard/Dashboard';
import NotFoundPage from 'pages/notfound/NotFoundPage';
import TreatmentManage from 'pages/admin/ManageProducts/Treatments/TreatmentManage';
import ProductManage from 'pages/admin/ManageProducts/Products/ProductManage';

function App() {
  const productCart = useSelector(productCarts);
  const productIdcart = productCart.map(item => item.id);
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/contact-us" component={ContactUs} />
                {/* admin route */}
                <PrivateRoute path="/admin">
                    <Navigation>
                            <Switch>
                                <PrivateRoute exact path="/admin" topath="/admin/dashboard" />
                                <PrivateRoute exact path="/admin/dashboard" component={Dashboard} />
                                <PrivateRoute exact path="/admin/manage-products" topath="/admin/treatments" />
                                <PrivateRoute exact path="/admin/treatments" component={TreatmentManage} />
                                <PrivateRoute exact path="/admin/products" component={ProductManage} />
                                <Route path="*">
                                    <NotFoundPage />
                                </Route>                
                            </Switch>
                    </Navigation>
                </PrivateRoute>

                {/* home routing */}
                <Route path="/">
                    <MainClientPage>
                        <Switch>
                            <Route exact path="/" topath="/home" />
                            <Route exact path="/techstoredeploy">
                                <HomePage productIdCart={productIdcart} />
                            </Route>
                            <Route exact path="/home">
                                <HomePage productIdCart={productIdcart} />
                            </Route>
                            <Route exact path="/shop-page">
                                <ShopPage productIdCart={productIdcart} />
                            </Route>
                            <Route exact path="/shop-page/products/:id">
                                <ProductDetail productIdCart={productIdcart} />
                            </Route>
                            <Route exact path="/blog">
                                <BlogPage />
                            </Route>
                            <Route exact path="/blog/:id">
                                <BlogDetail />
                            </Route>
                            <Route exact path="/treatments">
                                <Treatment/>
                            </Route>
                        </Switch>
                    </MainClientPage>
                </Route>
                
                {/* NotFound routing */}
                <Route path="*">
                    <NotFoundPage />
                </Route>                
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
