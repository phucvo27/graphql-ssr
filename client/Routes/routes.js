import HomePage from '../pages/Home/Home';
import App from '../App';
import Order from '../pages/Order/Order.js';
import ProductDetail from '../pages/Product-Detail/Product-Detail.jsx';
import Checkout from '../pages/Checkout/Checkout.jsx'
//import AnotherPage from './AnotherPage';

const routes = [
  {
    ...App,
    routes: [
      {
        path: "/",
        component: HomePage,
        exact: true
      },
      {
        path: "/orders",
        component: Order,
      },
      {
        path: "/product",
        component: ProductDetail,
      },
      {
        path: "/checkout",
        component: Checkout,
        exact: true
      },
    ]
  }
];

export default routes;