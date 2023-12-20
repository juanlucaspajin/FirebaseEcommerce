
function ItemQuantitySelector({ maxStock, setQuantity }) {

    const rows = [];
    for (let index = 1; index <= maxStock; index++) {
        rows.push(<option key={index} value={index}>{index}</option>)
    }

    return (
        <div>
            <p>Elige la cantidad de cursos a comprar</p>
            <select className="form-control" onChange={e => setQuantity(parseInt(e.target.value))}>
                {rows}
            </select>
        </div>
    );
}

export default ItemQuantitySelector;