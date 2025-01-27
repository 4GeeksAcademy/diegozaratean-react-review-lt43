import React, { useEffect, useState } from "react";

const Getdata = ()=>{

    const [ characters , setCharacters] = useState([{name:'rick'}])

    function getCharacters(){
        console.log('getCharacters')
        fetch('https://rickandmortyapi.com/api/character')
        .then( (response)=> response.json() )
        // .then( (data)=> console.log(data.results) )
        .then( (data)=>  setCharacters(data.results))
    }

    useEffect(()=>{
        console.log('se cargo ')
        getCharacters()
    },[])

    return(
        <>
            <h1>Getdata</h1>
            {characters.map( (character, index)=> 
                <p key={index}> 
                    personaje: {character.name} 
                    <img src={character.image} alt={character.name} />
                </p> 
            )}
        </>
    )
}

export default Getdata