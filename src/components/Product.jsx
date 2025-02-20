import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, title, price, image, description } = product;

    const navigate = useNavigate();
    return (
        <div className='product-container flex-column'>
            <div className='image-container'>
                <img src={image} alt={description} />
            </div>
            <div className='text-container'>
                <h3 className='title'>{title}</h3>
                <div className='flex-row'>
                    <h4 className='price'>${price}</h4>
                    <button className='add-cart' onClick={() => navigate("/product-details/" + id)}>Details</button>
                </div>
            </div>
        </div>
    )
}

export default Product
