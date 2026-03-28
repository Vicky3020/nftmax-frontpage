
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Nav from './Components/Nav'
import NotFound from './Components/NotFound'

function App() {
 

  return (
    <>
    <Nav/>
    {/* <Routes> 
      <Route path='/' element={<Home/>} />   
      <Route path='/about' element={<About/>} />   
      <Route path='/contact' element={<Contact/>} />   
      <Route path='/*' element={<NotFound/>} />   
    </Routes> */}
      <Home/>
    </>
  );
}

export default App
