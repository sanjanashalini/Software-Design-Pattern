import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Catalogue from './components/Catalogue'
import Cart from './components/Cart'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Admin from './Admin/Admin'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <main className='min-h-screen flex flex-col '>
      <Navbar />
      <Routes>
      
        <Route path='/' element={<><Hero /><Generator /></>} />
        <Route path='/catalogue' element={<Catalogue />} />  
        <Route path='/cart' element={<Cart/>} />  
        <Route path="/login" element={<Login />} />
       
        <Route path="/admin" element={<Admin />} />
       
      </Routes>
    </main>
    <Footer />
  </Router>
  )
}

export default App