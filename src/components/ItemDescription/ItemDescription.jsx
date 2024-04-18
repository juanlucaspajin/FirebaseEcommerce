import { formatMoney } from '../../utils/moneyFormatter'

function ItemDescription({ description, price }) {
    return (
        <div>
            <p>
                { description }
            </p>

            <p>
                Su precio es de {price} ARS
            </p>
        </div>
    );
}

export default ItemDescription;