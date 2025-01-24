import React, { useState } from "react";

const Tareas = ()=>{

    const [tareas, setTareas] = useState(['limpiar casa','proyecto del bootcamp','ducharse'])


    function agregarTarea(){
        console.log('agregarTarea')    
        let elemento = 'estudiar react'
        // console.log(tareas)
        // tareas.push(elemento)
        // console.log(tareas)
        setTareas([...tareas,elemento])
    }

    return(
        <>
            <h1>Tareas</h1>
            <p>
                {tareas}
            </p>
            <ol>
                {tareas.map( (tarea, index)=> <li key={index}> {tarea}</li> )}
            </ol>
            <button onClick={agregarTarea}>agregar tarea</button>
        </>
    )
}

export default Tareas

// agregar un elemento a un array