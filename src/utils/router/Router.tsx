import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import routerMap from './RoutesMap';

const Router: FC = () => {
  return <RouterProvider router={routerMap} />;
};

export default Router;
