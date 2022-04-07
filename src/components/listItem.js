import React from 'react';

export default function ListItem(props){
    let isDone = props.isDone
    let itemStyle
    let buttonStyle
    if(isDone){
        itemStyle = {
            background : "rgb(93, 93, 93)",
            border : "none"
        }
        buttonStyle = {
            filter : "brightness(50%)"
        }
    }
    return(
        <li style={itemStyle}>
            <span className='remove-botton btn' onClick={() => props.removeTask(props.id)} style={buttonStyle}><i className="fa-solid fa-xmark"></i></span>
            <p>{props.text}</p>
            <span className='done-botton btn' onClick={() => props.done(props.id)} style={buttonStyle}><i className="fa-solid fa-check"></i></span>
        </li>
    )
}