function AddItemButton({ onItemAdded }) {
    return(
        <div>
            <button type="button" className="btn btn-success my-3" onClick={onItemAdded}>Agregar al carrito</button>
        </div>
    );
}

export default AddItemButton;