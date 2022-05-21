import React, { useState } from 'react'
import './ItemCount.css';

function ItemCount({stock}) {
    const [count, setCount] = useState(0);

    function adding () {
        if(count < stock) {
            setCount(count + 1);
        }
    }
    function subs () {
        if(count > 0) {
            setCount(count - 1);
        }
    }

    function onAdd () {
        if(count <=0) { alert("You didn't add any item")
        }else {
        alert('You added ' + count + ' items to your cart');
        }
    }
    
  return (
    <div>
        <div className="countContainer">
            <button onClick={subs} className="danger" >-</button>
            <p className="contador">{count}</p>
            <button onClick={adding} className="success">+</button>
        </div>
        <button onClick={onAdd} className="addProduct">Comprar</button>
    </div>
  )
}

export default ItemCount