import { db } from '../../services/firebase/firebaseConfig'
import React,{ useState, useEffect } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)

            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])


    return (
        <div className='ItemDetailContainer'>
            {loading ? (
                <p>Obteniendo detalles del artículo...</p>
            ) : (
                product && <ItemDetail {...product} />
            )}
        </div>
    )
}

export default ItemDetailContainer