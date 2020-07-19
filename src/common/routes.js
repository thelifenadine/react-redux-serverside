import loadable from '@loadable/component';
import React from 'react';

// for the components that retrieve async content,
// loadable can be used for the child components
import MainLayout from './components/MainLayout';
import SomewhereConnector from './components/SomewhereConnector';

// lazy load components that have no data fetching
const AnotherPage = loadable(() => import('./components/AnotherPage'));
const NotFound = loadable(() => import('./components/NotFound'));
const Home = loadable(() => import('./components/Home'), {
  fallback: <div>Loading...</div>,
});

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
