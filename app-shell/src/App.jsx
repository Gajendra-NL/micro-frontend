import { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// Lazy load micro frontends
const Cart = lazy(() => import('cartApp/Cart'))
const Account = lazy(() => import('userApp/Account'))
const ProductList = lazy(() => import('catalogApp/ProductList'))

function App() {
  console.log('App Shell is running! on port 5100', ProductList)

  return (
    <BrowserRouter>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#eee' }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/cart">Cart</Link> | <Link to="/account">Account</Link>
        </nav>
      </header>

      <main style={{ padding: '20pc' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  )
}

export default App
