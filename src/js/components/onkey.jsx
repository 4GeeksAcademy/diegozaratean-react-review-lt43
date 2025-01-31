import React, { useState } from "react";

const Onkey = ()=>{

    const [tarea, setTarea] = useState('')

    function bajoTecla(e){
        console.log('bajoTecla')
        console.log(e.key)
        console.log(e.keyCode)

        if(e.keyCode == 13){
            console.log('oprimistre ENTER')
            // llamado a la funcion de crear tarea
            setTarea('')

        }

        

    }
    
    return(
        <>
            <h1>Onkey</h1>
            <input placeholder="ingeresa tu tarea" type="text" name="tarea" onKeyDown={bajoTecla} value={tarea} onChange={(e)=> setTarea( e.target.value) }/>
        </>
    )
}

export default Onkey