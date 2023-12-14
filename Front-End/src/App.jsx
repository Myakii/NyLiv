import './css/App.css'
import Navbar from './components/Header/Header'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AdoptForm from './pages/AdoptForm'
import FunctionNavigation from './dev_tool/FunctionNavigation'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Auth from './Auth'
import Footer from './components/Footer/Footer'
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import Crashtestapi from './dev_tool/crashtestapi'
  
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
          
          <Route path='/admin' element={<FunctionNavigation />} />
          <Route path='/crashtestapi' element={<Crashtestapi />} />


        </Routes> 
        <Link to='./admin' > <BuildCircleIcon className='admin-btn-tool' sx={{fontSize: 60}} /> </Link>
        <Footer />

      </div>
    </Auth>

  )
}

export default App
