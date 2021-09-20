import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface ILayoutProps {
    children: JSX.Element;
    toggle:Function;
}

const Layout: React.FunctionComponent<ILayoutProps> = (props):any => {
  return (
    <div className="">
      <div className="sticky z-10 top-0 ">
        {" "}
        <Header toggler={props.toggle} />
      </div>
      <div className="lg:flex">
        <div className="">
          {" "}
          <Sidebar />
        </div>
        <div className="lg:w-4/5 mx-auto flex-1 border lg:ml-60">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
