import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Footer} from './components/Footer'
import {Header} from './components/Header'
import {CartScreen} from './screens/CartScreen'
import {HomeScreen} from './screens/HomeScreen'
import {ProductScreen} from './screens/ProductScreen'
import {CheckoutScreen} from './screens/CheckoutScreen'
import {LoginScreen} from './screens/LoginScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/checkout" component={CheckoutScreen} />
          <Route path="/login" component={LoginScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
