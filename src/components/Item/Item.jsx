
export const Item = ({producto}) => {
    return(
        <div>
                            <img src={producto.image} alt={producto.title} />
                            <h2>{producto.title}</h2>
                            <p>€{producto.price}</p>
                            <p>{producto.description}</p>
                            <p>*****************************</p>
                        </div>
    )
};