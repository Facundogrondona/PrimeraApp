import './ItemListContainer.css'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../utils/asyncromck'
import { getProductsByCategory } from '../../utils/asyncromck'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Spiner from '../Spiner/Spiner'

import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId)) 
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])


  if(loading) {
      return <h1>Cargando...</h1>
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