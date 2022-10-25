import { FC } from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
