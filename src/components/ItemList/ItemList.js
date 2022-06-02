import React from 'react'
import Item from '../Item/Item'


function ItemList ({products}) {
    return (
        <div>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList