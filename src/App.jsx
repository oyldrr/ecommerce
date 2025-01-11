import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'

import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'

function App() {

  return (
    <PageContainer>
      <Loading />
      <Header />
      <RouterConfig />
      <ProductList />
    </PageContainer>
  )
}

export default App
