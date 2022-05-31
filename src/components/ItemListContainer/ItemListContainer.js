import React, { useEffect, useState } from 'react';
import customFetch from '../../utils/CustomFetch';
import productos from '../../utils/productos';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'


function ItemListContainer() {
    const [items, setItems] = useState([]);
    console.log(items);
    useEffect(() => {
        customFetch(1000, productos)
        .then(resultado => setItems(resultado))
        
    }, []);

    console.log(items);

  return (
    <section className="recetas">
      <ItemList productos={items} />
      
      </section>
    
  )
}

export default ItemListContainer