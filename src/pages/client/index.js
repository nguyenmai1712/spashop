import FixedMenu from 'components/FixedMenu';
import NotificationCart from 'components/NotificationCart';
import ScrollTopButton from 'components/ScrollTopButton';
import SidebarMenu from 'components/SidebarMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { isOpenSnackbar } from 'redux/cart/selector';

import Body from './body/Body';
import CartDrawer from './CartDrawer/CartDrawer';
import Footer from './footer/Footer';
import Header from './header/Header';
import Menu from './menu/Menu';

import { popularData } from '../FakeData';
import { menuData } from '../FakeData';
import { categoryData } from '../FakeData';
import { tagCloudData } from '../FakeData';

function MainClientPage( props ) {
  const location = useLocation();
  const isNotify = useSelector(isOpenSnackbar);
  console.log('re-render');

  return (
    <div>
      <Header />
      <FixedMenu location={location.pathname} />
      <Menu location={location.pathname} />
      <Body
        location={location.pathname}
        popularData={popularData}
        tagCloudData={tagCloudData}
        categoryData={categoryData}
      >
        {props.children}
      </Body>
      <Footer location={location.pathname} popularData={popularData} />
      <CartDrawer />
      <SidebarMenu location={location.pathname} menuData={menuData} categoryData={categoryData} />
      <ScrollTopButton/>
      <NotificationCart isNotify={isNotify} />
    </div>
  )
}

export default React.memo(MainClientPage);