import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface ILayoutProps {
    children: JSX.Element;
}

const Layout: React.FunctionComponent<ILayoutProps> = (props):any => {
  return (
    <div>
      <div>
        {" "}
        <Header />
      </div>
      <div className="lg:flex">
        <div className="">
          {" "}
          <Sidebar />
        </div>
        <div className="flex-1">
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
