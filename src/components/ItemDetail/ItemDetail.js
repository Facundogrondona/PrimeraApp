import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'

const ItemDetail = ({id, nombre, receta, precio, imagen, category, stock}) => {
  const [quantity, setQuantity] = useState(0)

    const { setNotification } = useNotification()

    const { addItem, getProduct } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        setNotification('success', 'Se agrego correctamente al carrito')
        addItem({ id, nombre, precio, quantity })
    }
    
    return (
      <div className="receta">
        <img  className="receta__imagen" src={imagen} alt={nombre} />
        <div className="receta__contenido">
            <h4 className="receta__titulo">{category}</h4>
            <h4 className="receta__titulo">{nombre}</h4>
            <p className="receta__descripcion">{receta}</p>
            <h4 className="receta__titulo">$ {precio}</h4>
            <footer className='ItemFooter'>
                  { quantity > 0  
                  ? <Link to='/cart'>Finalizar compra</Link> 
                  : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>}
            </footer>
        </div>
      </div>
    )
    
  }
  
  export default ItemDetail

