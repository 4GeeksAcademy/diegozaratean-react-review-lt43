import React, { useState } from "react";

const Form = ()=>{

    const [name, setName] = useState('napoleon')
    const [lastname, setLastname] = useState('bonaparte')


    return(
        <>        
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" value={name} onChange={ (e)=>setName(e.target.value) } className="form-control" id="name" placeholder="enter name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Lastname</label>
                <input type="text" value={lastname} onChange={ (e)=> setLastname(e.target.value) } className="form-control" id="lastname" placeholder="enter lastname"/>
            </div>
            <p> Tu nombre completo es : { name } {lastname} </p>
        </>
    )
}

export default Form