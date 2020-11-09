import HomePage from '../pages/Home/Home';
import App from '../App'
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
    ]
  }
];

export default routes;