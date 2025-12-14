import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {

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
            <Route path="/" element={<h1>Welcome to App Shell</h1>} />
            <Route path="/cart" element={<h1>Cart TBD</h1>} />
            <Route path="/account" element={<h1>Account to be developed</h1>} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  )
}

export default App
