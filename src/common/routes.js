import MainLayout from './components/MainLayout';
import Home from './components/Home';
import AnotherPage from './components/AnotherPage';
import NotFound from './components/NotFound';

const routes = [
  {
    component: MainLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/another',
        component: AnotherPage,
      },
      {
        path: '/*',
        component: NotFound,
      }
    ]
  }
];

export default routes;
