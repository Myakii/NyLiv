import './css/App.css'
import Navbar from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AdoptForm from './pages/AdoptForm'
import FunctionNavigation from './dev_tool/FunctionNavigation'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Auth from './Auth'

function App() {

  return (

    <Auth>
      <div className='App'>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />   
          <Route path='/inscription' element={<SignUp />} />
          <Route path='/connexion' element={<Login />} />
      
          <Route path='/adoption-formulaire' element={<AdoptForm />} />
          



        </Routes>
        <FunctionNavigation />

      </div>
    </Auth>

  )
}

export default App
