import data from "../../data/productos.json";

export const PedirProductos = () => {
    return new Promise((resolve, reject) => {
        resolve(data);
    });
};