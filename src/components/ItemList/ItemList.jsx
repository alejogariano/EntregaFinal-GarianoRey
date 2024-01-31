import './ItemList.css'
import Item from '../Item/Item'
import '../../asyncMock'

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map(prod => <Item key={prod.nombre} {...prod} />)}
        </div>
    )
}

export default ItemList