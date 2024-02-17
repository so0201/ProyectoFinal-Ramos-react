import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebase/config";


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;


  useEffect(() => {
    
    const docREF = doc(database, "productos", id);
    getDoc(docREF)
      .then((resp) => {
       setItem(
          {...resp.data(), id: resp.id}
        );
      }) 
  }, [id])

  return (
    <div>
      {item && <ItemDetail item={item} />}

    </div>
  )
}

export default ItemDetailContainer