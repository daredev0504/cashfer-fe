import * as React from 'react';


interface ITabProps {
  activeTab: string;
  label: string;
  onClick : Function;
}


const Tab: React.FunctionComponent<ITabProps> = (props):any => {

    const onClick = () => {
      const { label, onClick } = props;
      onClick(label);
    };

 let className = "tab-list-item";

 if (props.activeTab === props.label) {
   className += " tab-list-active";
 }

  return (
    <li className={className} onClick={onClick}>
      {props.label}
    </li>
  );
};

export default Tab;
