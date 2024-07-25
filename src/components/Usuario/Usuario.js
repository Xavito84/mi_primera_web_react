export const Usuario = (props) => {

    console.log(props.nombre);

    return <div>
        <h1>{props.nombre}</h1>
        <p>{props.edad}</p>
        <p>{props.nacionalidad}</p>
        <hr />
    </div>
}

//otra manera seria:
export const Usuario1 = ( {nombre, edad, nacionalidad} ) => {

return  (<div>
            <h1>Nombre:{nombre}</h1>
            <p>Edad: {edad}</p>
            <p>Nacionalidad {nacionalidad}</p>
        </div>)

}