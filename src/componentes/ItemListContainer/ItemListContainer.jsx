import { useEffect, useState } from "react";
import { pedirDatos } from "./pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const category = useParams().category;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                const filteredProductos = category ? res.filter((producto) => producto.category.toLowerCase() === category.toLowerCase()) : res;
    
                setProductos(filteredProductos);
                setLoading(false);
    
                if (category && filteredProductos.length === 0) {
                    console.log(`No hay productos para la categoría "${category}".`);
                }
            })
    }, [category]);
    return (
        <>
        <ItemList productos={productos} />
        </>
    );
};

export default ItemListContainer;
