import './ItemListContainer.css'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../utils/asyncromck'
import { getProductsByCategory } from '../../utils/asyncromck'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Spiner from '../Spiner/Spiner'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
      setLoading(true)

      if(!categoryId) {
          getProducts().then(response => {
              setProducts(response)
          }).catch(error => {
              console.log(error)
          }).finally(() => {
              setLoading(false)
          })
      } else {
          getProductsByCategory(categoryId).then(response => {
              setProducts(response)
          }).catch(error => {
              console.log(error)
          }).finally(() => {
              setLoading(false)
          })
      }
  }, [categoryId])

  if(loading) {
      return <Spiner />
  }

  return (
    <section className="recetas">
            { 
                products.length > 0 
                    ? <ItemList products={products} />
                    : <h2>No hay productos</h2>
                }
      
    </section> 
  )
}

export default ItemListContainer