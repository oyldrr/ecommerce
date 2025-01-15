import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';

/* React Icons */
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


/* Custom CSS */
import '../css/ProductDetails.css';

function ProductDetails() {
    const [amount, setAmount] = useState(0);

    const increse = () => {
        setAmount(amount + 1);
    }

    const decrese = () => {
        if (amount > 0) {
            setAmount(amount - 1);
        }
    }


    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);

    const { price, image, title, description } = selectedProduct;

    const dispatch = useDispatch();

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }

    useEffect(() => {
        getProductById();
    }, [])

    return (
        <div className='flex-row'>
            <div>
                <img width="350px" src={image} alt={title} />
            </div>
            <div className='detail-text-container'>
                <h2 className='title-detail'>{title}</h2>
                <h3 className='description-detail'>{description}</h3>
                <h1 className='price-detail'>${price}</h1>
                <div className='amount-container'>
                    <CiCircleMinus className='icon' onClick={decrese} /><span className='amount-detail'>{amount}</span><CiCirclePlus className='icon' onClick={increse} />
                </div>
                <button className='add-cart'>Add Cart</button>
            </div>
        </div>
    )
}

export default ProductDetails
