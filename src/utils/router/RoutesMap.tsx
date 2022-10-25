import { createBrowserRouter } from 'react-router-dom';

const routerMap = createBrowserRouter([
  {
    path: '/',
    element: <h1>Yeimmy</h1>,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: 'team',
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
]);

export default routerMap;
