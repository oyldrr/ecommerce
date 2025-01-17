import './App.css'

/* MUI Container & Components*/
import PageContainer from './container/PageContainer'
import Drawer from '@mui/material/Drawer';

/* Components */
import Header from './components/Header'
import Loading from './components/Loading'

/* Router */
import RouterConfig from './config/RouterConfig'

/* Redux */
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasket, removeProduct, setDrawer } from './redux/slices/basketSlice';

/* React Icons */
import { MdDelete } from "react-icons/md";
import { useEffect } from 'react';


function App() {

  const { products, drawer, totalPrice } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, products)

  return (
    <PageContainer>
      <Loading />
      <Header />
      <RouterConfig />
      <Drawer anchor='right' open={drawer} onClose={() => dispatch(setDrawer())}>
        <div className="basket-container">
          {
            products && products.map((product) => {
              return (
                <div key={product.id} className='flex-row flex-space-between basket-products'>
                  <img width={"50px"} src={product.image} alt={product.title} />
                  <p className='basket-product-title'>{product.title} x {product.amount}</p>
                  <p className='price'>${product.price * product.amount}</p>
                  <MdDelete className='icon' onClick={() => dispatch(removeProduct(product))} />
                </div>
              )
            })
          }
          <hr />
          <div className='flex-space-between'>
            <p>Total price:</p>
            <p className='price'>${totalPrice}</p>
          </div>
        </div>
      </Drawer>
    </PageContainer >
  )
}

export default App
