import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Somewhere from './components/Somewhere';
import AnotherPage from './components/AnotherPage';
import NotFound from './components/NotFound';

const routes = [
  {
    component: MainLayout,
    routes: [
      {
        exact: true,
        path: '/',
        component: Home,
      },
      {
        path: '/another',
        component: AnotherPage,
      },
      {
        path: '/somewhere',
        component: Somewhere,
      },
      {
        path: '/*',
        component: NotFound,
      }
    ]
  }
];

export default routes;
