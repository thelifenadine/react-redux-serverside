import loadable from '@loadable/component';

// for the components that retrieve async content,
// loadable can be used for the child components
import MainLayout from './components/MainLayout';
import SomewhereConnector from './components/SomewhereConnector';

const Home = loadable(() => import('./components/Home'));
const AnotherPage = loadable(() => import('./components/AnotherPage'));
const NotFound = loadable(() => import('./components/NotFound'));

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
        component: SomewhereConnector,
      },
      {
        path: '/*',
        component: NotFound,
      }
    ]
  }
];

export default routes;
