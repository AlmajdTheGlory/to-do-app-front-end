import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./assets/fontawesome-free-6.0.0-web/css/all.min.css"

import Form from "./components/form";
import List from "./components/list";

export default function App(){
    const [list, setList] = React.useState([
        {text :"133444444444444444444444", id:1, isDone: false},
        {text :"lorem 2", id:2, isDone: true},
        {text :"lorem 3", id:3, isDone: false},
        {text :"lorem 4", id:4, isDone: false}  
    ])
    function handleAdd(event){
        const newInput = document.getElementById("input").value
        console.log(newInput)
        
        event.preventDefault();
        const tempList = [...list]
        function NewTask(text){
            this.text = text;
            this.id = list.length + 1;
            this.isDone = false;
        }
        const newTask = new NewTask(newInput)
        console.log(newTask)
        tempList.push(newTask)
        setList(tempList)
    }
    function handleRemove(id){
        console.log(`removed ${id}`)
        const newList = list.filter((item) => item.id !== id);
        setList(newList)
        console.log(list)
    }
    function handleDone(id){
        console.log(`done ${id}`)
        let tempList = [...list]
        for(let i=0; i < list.length; i++){
            if(list[i].id === id){
                tempList[i].isDone = !tempList[i].isDone
                setList(tempList)
            }
        }
    }

    return(
        <div className="app">
            <Form add={handleAdd}/>
            <List list={list} removeTask={handleRemove} done={handleDone}/>
        </div>
    )
}

