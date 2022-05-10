import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Error from './pages/Error'
import Footer from './Footer'
import Shopping from './shopping/Shopping'
import NoteItems from './pages/NoteItems'
import ItemsDetail from './pages/ItemsDetail'
import SingleItem from './pages/SingleItem'
import CompareItem from './pages/CompareItem'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shopping' element={<Shopping />} />
        <Route path='/noteitems' element={<NoteItems />} />
        <Route path='/itemsdetail' element={<ItemsDetail />} />
        <Route path='/items/:itemId' element={<SingleItem />} />
        <Route path='/compare/:itemId' element={<CompareItem />} />

        <Route path='/error' element={<Error />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
