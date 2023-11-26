import React from "react";
import  ReactDOM  from 'react-dom';
import ListItemBtn from "./list-item-btn";

const List = ({valuesButton}) => {
  const elements = valuesButton.map((item) => {
   return (
    <li>
      <ListItemBtn {...item}/>
    </li>
   ) 
  })
    return (
      <div>
          <ul>
            {elements}
          </ul>
        </div>
    )
  }

export default List