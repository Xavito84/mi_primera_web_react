import { Item } from "../Item/Item";

export const ItemList = ({productos}) => {
    return (
        <div>
            <h1>Productos</h1>
            {
                productos.length > 0 &&
                productos.map((producto) => {
                    return (
                        <Item key={producto.id} producto={producto}/>
                    );
                })
            }
        </div>
    )
}
//cuando haces un map() hay que hacer un key con id pra que no nos de problemas