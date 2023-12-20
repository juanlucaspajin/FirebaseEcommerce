import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CheckoutBrief.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { formatMoney } from '../../utils/moneyFormatter'

function CheckoutBrief() {
    const {
        cartItems,
        totalCartItems,
        totalQuantity,
        removeItem,
        clearCartItems
    } = useContext(CartContext)

    const deleteCart = []
    if (totalQuantity > 0) {
        deleteCart.push(
            <div className="row">
                <div className="col-md-12">
                    <button type="button" className="btn btn-danger" onClick={() => clearCartItems()}>Borrar carrito</button>
                    <button type="button" className="btn btn-success mx-2">Pagar</button>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <h1>Estos son los productos que usted esta comprando</h1>
            <div className="row">
                {cartItems.map(element =>
                    <div className="cart-row col-md-12" key={element.id}>
                        <h3>{element.name}</h3>
                        <img src={element.pic} alt={element.name} />
                        <p>Subtotal: {formatMoney(element.subTotal)}</p>
                        <div className="other-description">
                            <p>Cantidad: {element.quantity}</p>
                            <button type="button" className="btn btn-danger mx-2" onClick={() => removeItem(element.id)}><FaRegTrashAlt /></button>
                        </div>
                    </div>
                )}
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h3>Cantidad total de items: {totalQuantity}</h3>
                </div>
                <div className="col-md-12">
                    <h3>Total a pagar: {formatMoney(totalCartItems)}</h3>
                </div>
            </div>

            {deleteCart}
        </div>
    );
}

export default CheckoutBrief