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

 let className = "";

 if (props.activeTab === props.label) {
   className += " tab-list-active";
 }

  return (
    <li className={" cursor-pointer bg-cashfer-medium-purple  mr-2 inline-block list-none text-gray-700 mb-2 px-3 py-2" + className} onClick={onClick}>
      {props.label}
    </li>
  );
};

export default Tab;

// background-color: #f9f6ff;
//   margin-right: 1em;
//   display: inline-block;
//   list-style: none;
//   color: #333333;
//   margin-bottom: 10px;
//   padding: 0.5rem 0.75rem;