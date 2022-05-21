import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

function Item({id, nombre, receta, precio, imagen, stock}) {
  return (
    <div className="receta" key={id}>
    <img  className="receta__imagen" src={imagen} alt={nombre} />
    <div className="receta__contenido">
        <h4 className="receta__titulo">{nombre}</h4>
        <p className="receta__descripcion">{receta}</p>
        <h4 className="receta__titulo">$ {precio}</h4>
        <h4 className="receta__titulo">Disponibles {stock}</h4>
        <ItemCount stock={stock} />
    </div>
</div>

  )
}

export default Item