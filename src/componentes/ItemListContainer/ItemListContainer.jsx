import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import { database } from "../firebase/config";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [name, setName] = useState("Productos");
    const category = useParams().category;

    useEffect(() => {
        
        const productosREF = collection(database, "productos");

        const q = category ? query(productosREF, where("category", "==", category)) : productosREF;

        getDocs(q)
            .then((resp) => {

                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })

    }, [category]);
    return (
        <>
        <ItemList productos={productos} />
        </>
    );
};

export default ItemListContainer;
