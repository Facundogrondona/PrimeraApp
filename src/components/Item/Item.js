
import { Link } from 'react-router-dom';
import './Item.css'

function Item({id, nombre, precio, imagen, stock}) {
  return (
    <div className="receta" key={id}>
    <img  className="receta__imagen" src={imagen} alt={nombre} />
    <div className="receta__contenido">
        <h4 className="receta__titulo">{nombre}</h4>
        <h4 className="receta__titulo">$ {precio}</h4>
        <h4 className="receta__titulo">Disponibles {stock}</h4>
        <Link to={`/detail/${id}`} className="receta__boton" >Detalle de la Receta</Link>
    </div>
</div>

  )
}

export default Item