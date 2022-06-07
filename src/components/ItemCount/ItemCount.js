import React, { useState } from 'react'
import './ItemCount.css';

const ItemCount = ({stock= 0, initial = 1, onAdd}) => {
    const [quantity, setCount] = useState(initial);

    const adding = () =>{
        if(quantity < stock) {
            setCount(quantity + 1);
        }
    }
    const subs = () => {
        if(quantity > 0) {
            setCount(quantity - 1);
        }
    }

  return (
    <div>
        <div className="countContainer">
            <button onClick={subs} className="danger" >-</button>
            <p className="contador">{quantity}</p>
            <button onClick={adding} className="success">+</button>
        </div>
        <button onClick={() => onAdd(quantity)} className="addProduct">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
