import './css/App.css'
import Navbar from './components/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {


  return (
    <>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />




      </Routes>
    
    </Router>
    </>
  )
}

export default App
