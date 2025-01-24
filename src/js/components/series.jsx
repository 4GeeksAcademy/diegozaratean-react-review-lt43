import React, { useState } from "react";

const Series = ()=>{


    const [favoritas, setFavoritas] = useState(['lucifer','daredevil','breaking bad','squid game','shadow hunters','chernobyl'])


    let nueva = 'bandidos'

    function agregar(){
        console.log('agregar')
        console.log(favoritas)
        console.log(...favoritas)
        // favoritas.push(nueva)
        setFavoritas([...favoritas,nueva])
        console.log(favoritas)
    }
    return(
        <>
            <h1>Series</h1>
            <p>mis series favoritas son:</p>
            {favoritas}
            <button onClick={agregar}>Agregar serie</button>
            { favoritas.map( (favorito, index)=> <p key={index}>Serie {index}: {favorito}</p> ) }

            <p>tienes {favoritas.length} series favoritas</p>
    
        </>
    )
}

export default Series


// PSEUDOCODIGO
// DONE:mostrar input en html
// DONE:obetner el valor que ingreso en el input en jsx
// DONE:identificar cuando le doy enter a un input
// DONE: agregar un elemento a un array
// DONE: mostrar un array de tareas
// eliminar una tarea 
//  cuando hago hover sobre la sloigta mostar un boton de eliminar
//  eliminar un elemento de un array en react
// contar los elementos de un array
// agregar estilos a la parte grafica


