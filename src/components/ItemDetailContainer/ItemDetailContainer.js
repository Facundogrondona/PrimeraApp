import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductsById } from '../../utils/asyncromck'
import Spiner from '../Spiner/Spiner.js'



const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return  <Spiner/>
        
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer


 