import React from 'react';

import ListItem from './listItem';

export default function List(props){
    let list = props.list

    return(
        <ul>
            {list.map(item => (<ListItem key={item.id} id={item.id} text={item.text} removeTask={props.removeTask} done={props.done} isDone={item.isDone}/>))}
        </ul>
    )
}