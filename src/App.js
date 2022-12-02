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
import NotFoundPage from 'pages/notfound/NotFoundPage';
import TreatmentManage from 'pages/admin/ManageProducts/Treatments/TreatmentManage';
import TreatmentDetailAdmin from 'pages/admin/ManageProducts/Treatments/TreatmentDetail';
import ManageEmployee from 'pages/admin/ManangeEmployeer/Employee/ManageEmployee';
import Salary from 'pages/admin/ManangeEmployeer/Salary/Salary';
import CheckInOut from 'pages/admin/ManangeEmployeer/Check-in-out/CheckInOut';
import ManageCustomer from 'pages/admin/ManageCustomer/ManageCustomer';
import Report from 'pages/admin/Report';
import TreatmentForm from 'pages/admin/ManageProducts/Treatments/TreatmentForm';
import ProductManage from 'pages/admin/ManageProducts/Products/ProductManage';
import ProductForm from 'pages/admin/ManageProducts/Products/ProductForm';
import ProductDetailAdmin from 'pages/admin/ManageProducts/Products/ProductDetailAdmin';
import CheckoutPage from 'pages/client/CheckoutPage/CheckoutPage';
import Calendars from 'pages/admin/Calendar/Calendars';

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
                <Route exact path="/checkout" component={CheckoutPage} />
                {/* Trang quản lí */}
                <PrivateRoute path="/admin">
                    <Navigation>
                            <Switch>
                                <PrivateRoute exact path="/admin" topath="/admin/calendar" />
                                <PrivateRoute exact path="/admin/calendar" component={Calendars} />
                                
                                {/* Quản lí sản phẩm */}
                                <PrivateRoute exact path="/admin/manage-products/products" component={ProductManage} />
                                <PrivateRoute exact path="/admin/product-detail/:id" component={ProductDetailAdmin} />
                                <PrivateRoute exact path="/admin/product-add" component={ProductForm} />
                                <PrivateRoute exact path="/admin/product-edit/:id" component={ProductForm} />

                                {/* quản lí liệu trình */}
                                <PrivateRoute exact path="/admin/manage-products/treatments" component={TreatmentManage} />
                                <PrivateRoute exact path="/admin/treatment-detail/:id" component={TreatmentDetailAdmin} />
                                <PrivateRoute exact path="/admin/treatment-edit/:id" component={TreatmentForm} />
                                <PrivateRoute exact path="/admin/treatment-add" component={TreatmentForm} />

                                {/* Quản lí nhân sự */}
                                <PrivateRoute exact path="/admin/manage-employees/employees" component={ManageEmployee} />
                                <PrivateRoute exact path="/admin/manage-employees/employees" component={ManageEmployee} />
                                <PrivateRoute exact path="/admin/manage-employees/salary" component={Salary} />
                                <PrivateRoute exact path="/admin/manage-employees/checkin-out" component={CheckInOut} />
                                <PrivateRoute exact path="/admin/manage_customer" component={ManageCustomer} />

                                {/* report */}
                                <PrivateRoute exact path="/admin/report" component={Report} />
                                <Route path="*">
                                    <NotFoundPage />
                                </Route>                
                            </Switch>
                    </Navigation>
                </PrivateRoute>

                {/* Trang khách */}
                <Route path="/">
                    <MainClientPage>
                        <Switch>
                            <Route exact path="/" topath="/home" />
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
                            {/* NotFound routing */}
                            <Route path="*">
                                <NotFoundPage />
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
