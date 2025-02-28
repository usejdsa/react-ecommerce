import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail({ AddCartItem, cart }) {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`/react-ecommerce/api/products/${id}.json`)
            .then(res => res.json())
            .then(res => setProduct(res));
    }, [id])

    const isProductInCart = !!cart.find(p => p.id == id);

    return (<div className='flex items-center justify-center h-[83.2vh]'>
        <div className='flex flex-col sm:flex-row sm:px-10 px-4 py-10 gap-4'>
            <img src={`/react-ecommerce/images/${product.imageUrl}`} className='w-full max-h-[60vh] object-contain' />
            <div className='flex flex-col justify-around sm:w-1/2'>
                <div className='flex flex-col gap-4 sm:px-0'>
                    <h1 className='pt-10 text-2xl font-bold text-indigo-900 text-center'>{product.name}</h1>
                    <p>{product.description}</p>
                </div>
                <div className='flex flex-col sm:flex-row justify-between p-8 items-center border mt-4 sm:mt-0'>
                    <p className='text-green-800 font-bold'>{product.price}$</p>
                    <button className={`p-2 px-16  text-white rounded-sm hover:bg-indigo-400 transition-colors duration-300 ease-in-out ${isProductInCart ? 'bg-indigo-200' : 'bg-indigo-800'}`} onClick={() => AddCartItem(product)} disabled={isProductInCart} >{isProductInCart ? 'Added to Cart' : 'Add to Cart'}</button>
                </div>
            </div>

        </div>

    </div>
    )
}
export default ProductDetail