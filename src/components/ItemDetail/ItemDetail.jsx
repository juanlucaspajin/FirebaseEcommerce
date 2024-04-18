import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import AddItemButton from "../AddItemButton/AddItemButton";
import ItemDescription from "../ItemDescription/ItemDescription";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";
import { CartContext } from "../../context/CartContext";
import { firestore } from "../../db/firebase";
import { getDocs, collection } from "@firebase/firestore";

function ItemDetail() {
    const { itemId } = useParams();
    const [selectedQuantity, setSelectedQuantity] = useState(0)
    const { addItem } = useContext(CartContext)
    const [cursoDetail, setCursoDetail] = useState({})

    useEffect(() => {
        fetchCurso()
    }, [cursoDetail])

    const fetchCurso = async () => {
        await getDocs(collection(firestore, "cursos"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                let cr = newData.find(element => element.id == itemId)
                setCursoDetail(cr)
            })
      }

    const addItemToCart = () => {
        addItem(cursoDetail, selectedQuantity)
    }

    return(
        <div>
            <ItemDescription description={cursoDetail?.desc} price={cursoDetail?.price}/>
            <ItemQuantitySelector maxStock={cursoDetail?.stock} setQuantity={setSelectedQuantity}/>
            <AddItemButton onItemAdded={addItemToCart}/>
        </div>
    );
}

export default ItemDetail;