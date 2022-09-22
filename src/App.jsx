import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Category } from './pages/Category'
import { Recipe } from './pages/Recipe'
// import { Users } from './pages/Users'
// import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <>
      {/* <Router> */}
        <Header />
        <main className="min-h-screen bg-green-100 pb-8 px-2 pt-5">
       
          <Routes>
            <Route exact path="/" element={<Home />} />           
            <Route exact path="/category/:name" element={<Category />} />
            <Route exact path="/meal/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      {/* </Router> */}
    </>
  )
}

export default App
