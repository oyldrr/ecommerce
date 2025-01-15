import React from 'react'

/* Router */
import { Routes, Route } from 'react-router-dom';

/* Pages */
import Home from '../pages/Home'

/* Components */
import ProductDetails from '../components/ProductDetails';

function RouterConfig() {
    return (
        <div className='content'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product-details/:id' element={<ProductDetails />} />
            </Routes>

        </div>
    )
}

export default RouterConfig
