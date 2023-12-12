import './css/App.css'
import Navbar from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AdoptForm from './pages/AdoptForm'
import FunctionNavigation from './dev_tool/FunctionNavigation'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Auth from './Auth'
import Footer from './components/Footer/Footer'

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

        <Footer />

      </div>
    </Auth>

  )
}

export default App
