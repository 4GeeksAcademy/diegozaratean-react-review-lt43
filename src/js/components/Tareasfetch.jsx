import React, { useEffect, useState } from "react";

const Tareasfetch =()=>{

    // let beachActivities = ['nadar','broncearse','kayak','hacer castillos','nadar']

    //useEffect(que va hacer cuando algo cambie, [con lo que queiro monitorear])

    useEffect(()=>{
        console.log('se cargo la pagina ')
        cargarTareas()
    },[])

    const [beachActivities , setBeachActivities] = useState(['nadar','broncearse','kayak','hacer castillos','nadar'])
    const [tareas,setTareas] = useState([])

    function cargarTareas(){
        console.log('cargarTareas')
        fetch('https://playground.4geeks.com/todo/users/juan_vera')
        .then( (response)=> response.json() )
        // .then( (data)=> console.log(data.todos) )
        .then( (data)=> setTareas(data.todos) )
    }

    function agregarActividad(){
        console.log('agregarActividad')
        console.log(beachActivities)
        // beachActivities.push('futbol tenis')
        setBeachActivities([...beachActivities,'futbol tenis'])
        console.log(beachActivities)
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
        fetch('https://playground.4geeks.com/todo/todos/juan_vera', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    function deleteTask(idToDelete){
        console.log('deleteTask' + idToDelete)
        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
          };
          
          fetch("https://playground.4geeks.com/todo/todos/"+idToDelete, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result)
                console.log('muchas ')
                console.log('acciones ')
                console.log('mas ')
                cargarTareas()
            })
    }

    return(
        <>
            <h1>Tareasfetch</h1>

            <button onClick={cargarTareas}>cargar tareas</button>

            {/* {beachActivities.map( (activity,index)=> <p key={index}> actividad {index}: {activity} </p> )}
            <button onClick={agregarActividad}>Agregar actividad</button> */}

            <h1>Tareas</h1>
            {tareas.map( (tarea,index)=> 
                <p key={tarea.id}>
                     Tarea {index} - {tarea.id} : {tarea.label}  
                     <button onClick={()=>deleteTask(tarea.id)}>eliminar tarea</button>
                </p>
                ) }


            <button onClick={agregarTarea}>Agregar tarea</button>
        </>
    )
}

export default Tareasfetch