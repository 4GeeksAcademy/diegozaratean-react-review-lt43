import React, { useState } from "react";

const Onsu = ()=>{

    const [tarea, setTarea] = useState('')

    function seEnvio(e){
        e.preventDefault()
        console.log('seEnvio')
        console.log('oprimistre ENTER')
        console.log(tarea)
        setTarea('')
    }
    return(
        <>
            <h1>Onsu</h1>
            <form onSubmit={seEnvio}>
                <input placeholder="ingeresa tu tarea" type="text" name="tarea"  value={tarea} onChange={(e)=> setTarea( e.target.value) }/>
            </form>
        </>
    )
}

export default Onsu