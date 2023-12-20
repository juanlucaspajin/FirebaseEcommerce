import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { cursos } from "../../utils/getCursos"
import AddItemButton from "../AddItemButton/AddItemButton";
import ItemDescription from "../ItemDescription/ItemDescription";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";
import { CartContext } from "../../context/CartContext";

function ItemDetail() {
    const { itemId } = useParams();
    const [selectedQuantity, setSelectedQuantity] = useState(0)
    const { addItem } = useContext(CartContext)

    const cursoDetail = cursos.find(element => element.id == itemId);

    const addItemToCart = () => {
        addItem(cursoDetail, selectedQuantity)
    }

    return(
        <div>
            <ItemDescription description={cursoDetail.desc} price={cursoDetail.price}/>
            <ItemQuantitySelector maxStock={cursoDetail.stock} setQuantity={setSelectedQuantity}/>
            <AddItemButton onItemAdded={addItemToCart}/>
        </div>
    );
}

export default ItemDetail;