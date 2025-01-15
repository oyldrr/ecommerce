import './App.css'

/* MUI Container */
import PageContainer from './container/PageContainer'

/* Components */
import Header from './components/Header'
import ProductList from './components/ProductList'
import Loading from './components/Loading'

/* Router */
import RouterConfig from './config/RouterConfig'

function App() {

  return (
    <PageContainer>
      <Loading />
      <Header />
      <RouterConfig />
    </PageContainer>
  )
}

export default App
