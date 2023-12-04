import './css/App.css'
import Navbar from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AdoptForm from './pages/AdoptForm'
import FunctionNavigation from './components/FunctionNavigation'

function App() {

  return (
    <div className='App'>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} /> 

      
        <Route path='/adoption-formulaire' element={<AdoptForm />} />




      </Routes>
      <FunctionNavigation />

    </div>
  )
}

export default App
