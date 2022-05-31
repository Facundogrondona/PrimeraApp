import React from 'react'
import Item from '../Item/Item'


function ItemList ({productos}) {
    return (
        productos.map(p => (
            <Item
            key={p.id}
            nombre={p.nombre}
            receta={p.receta}
            precio={p.precio}
            imagen={p.imagen}
            stock={p.stock}
            />
        )
    )
    )
}

export default ItemList