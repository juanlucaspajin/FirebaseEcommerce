import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to={`/checkout`}>
            <div>
                <AiOutlineShoppingCart color="white" />
                <Badge bg="danger">{totalQuantity}</Badge>
            </div>
        </Link>
    );
}

export default CartWidget;