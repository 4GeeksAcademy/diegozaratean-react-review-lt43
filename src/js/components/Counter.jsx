import React, { useEffect, useState } from "react";

const Counter = ()=>{

    const [ count , setCount ] = useState(0)
    const [ count2 , setCount2 ] = useState(20)

    function agregar(){
        console.log('agregar')
        setCount(count + 1)
        console.log(count)
    }

    function restar(){
        console.log('restar')
        setCount2(count2 -1)
    }
    
    //useEffect(funcion que se va a ejecutar,array con los datos o estados que quiero serguir)
    useEffect(()=>{
        console.log('count cambio ')
    },[count])

    useEffect(()=>{
        console.log('count2 cambio ')
    },[count2])

    useEffect(()=>{
        console.log('count o count2 cambio ')
    },[count,count2])

    useEffect(()=>{
        console.log('cuando se carga o renderiza el coponente ')
    },[])

    return(
        <>
            <h1>Counter</h1>
            <p> {count} </p>
            <button onClick={agregar}>agregar</button>
            <p> {count2} </p>
            <button onClick={restar}>restar</button>
        </>
    )
}

export default Counter