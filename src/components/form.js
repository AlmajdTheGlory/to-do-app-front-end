import React from 'react';

export default function Form(props){
    const [input , setInput] = React.useState("");
    function add(event){
        const newInput = document.getElementById("input").value
        console.log(newInput)
        
        event.preventDefault();
    }
    return(
            <div className='form-container'>
                <form>
                    <input type="text" id='input' />
                    <button className='add-btn' onClick={props.add}><i className="fa-solid fa-plus"></i></button>
                </form>
            </div>
    )
}