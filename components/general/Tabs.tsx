import * as React from "react";
import { useState } from "react";
import Tab from "../general/Tab";

interface TabsProps {
  children: JSX.Element[];
}

const Tabs: React.FunctionComponent<TabsProps> = (props): any => {
  const [activeTab, setactiveTab] = useState(props.children[0].props.label);

  const onClickTabItem = (label: string) => {
    setactiveTab(label);
  };

  return (
    <div className="dark:bg-gray-800 tabs w-11/12 rounded-2xl lg:w-9/12 bg-white mx-auto p-4">
      <ol className="tab-list border-b dark:border-gray-700 border-gray-200">
        {props.children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>

      <div className="tab-content">
        {props.children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tabs;
