import React, { useState } from "react";

const Test = ()=>{

    
    function cargarTareas(){
        console.log('cargarTareas')
        fetch('https://playground.4geeks.com/todo/users/ragnar')
        .then( (response)=> response.json() )
        .then( (data)=> console.log(data.todos) )
    }

    function agregarTarea(){
        console.log('agregarTarea')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "label": "tarea desde react",
                "is_done": false
              })
        };
        fetch('https://playground.4geeks.com/todo/todos/ragnar', requestOptions)
        .then( (response)=> response.json() )
        .then( (data)=> console.log(data) )
    }

    function eliminarTarea(){
        console.log('eliminarTarea')
        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
          };
          
          fetch("https://playground.4geeks.com/todo/todos/28", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
       
    }
    
    return(
        <>
            <h1>Test</h1>
            <button onClick={cargarTareas}> cargar tareas</button>
            <button onClick={agregarTarea}> agregar tareaa</button>
            <button onClick={eliminarTarea}> Eliminar tareaa</button>
        </>
    )
}

export default Test