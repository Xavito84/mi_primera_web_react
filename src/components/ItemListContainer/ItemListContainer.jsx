import { useEffect, useState } from "react";
import { PedirProductos } from "../PedirProductos/PedirProductos";
import { ItemList } from "../ItemList/ItemList";

// Promesas y map()
export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        PedirProductos()
            .then((res) => {
                setProductos(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    );
};
