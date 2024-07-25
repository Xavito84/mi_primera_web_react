import { useState } from "react";
import {TextH2} from './TextH2';



export const Text = () => {

    const[show, setShow] = useState(false);

    function handleShow () {
        setShow(!show);
    }

return (
    <div>

    <button onClick={handleShow}>{show ? "Ocultar" : "Mostrar"}</button>
    {show === true && <TextH2/>}
    <hr/>
    </div>
)
};
 // otra manera seria {show === true ? <h2>Hola mundo</h2>  :  <h2>Adios Mundo!</h2>}
 //mostraria hola mundo y adios mundo