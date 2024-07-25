//Hooks
//useState sirve para cambiar el estado de la variable en este caso number cada vez que se apriete en sumar lo actualiza

import { useState } from "react";

export const Counter = () => {

        const [number, setNumber ] = useState(0);

        const sumar = () => {
            setNumber(number +1);
        }
        const restar= () => {
            setNumber(number -1);
        }

return (
    <div>
        <button onClick={sumar}>Sumar</button>
        <h2>{number}</h2>
        <button onClick={restar}>Restar</button>
        <hr/>

    </div>
)
};
