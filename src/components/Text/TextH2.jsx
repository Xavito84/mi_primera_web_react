import { useState, useEffect } from "react";

export  const TextH2= () => {

    const[text, setText]= useState("");

    const handleText = (e) => {
        setText(e.target.value);
    }

    useEffect( () => {
        console.log("componente montado");
}, [] );

    useEffect( () => {
            console.log("Text modificado");
    }, [text] );

    return (

        <div>
            <input type="text" onChange={handleText} />
            <p>{text}</p>
        </div>
        
    )
};



/*
ciclo de vida en rect
- montaje --> mounting
- actualizacion --> updating
- desmontaje --> inmounting 
*/
