import React from "react";
import  ReactDOM  from 'react-dom';

import CardDescription from "./components/card-description";
import CardHeader from "./components/card-header";
import List from "./components/list";
import ListItem from "./components/list-item-btn";

const Card = () => {
  const cardData = [
    {label: 'Вариант 1'},
    {label: 'Вариант 2'},
    {label: 'Вариант 3'}
  ]
  return (
    <div>
       <div>
        <CardHeader/>
        <CardDescription/>
        <List valuesButton = {cardData}/> 
      </div>
    </div>
 
  )
}

ReactDOM.render(<Card/>, document.querySelector('#root'))

// h1, p , button , li 