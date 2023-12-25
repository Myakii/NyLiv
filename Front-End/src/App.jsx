<<<<<<< HEAD
import "./css/App.css";
import Navbar from "./components/Header/Header";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdoptForm from "./pages/AdoptForm";
import FunctionNavigation from "./dev_tool/FunctionNavigation";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Auth from "./Auth";
import Footer from "./components/Footer/Footer";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import Crashtestapi from "./dev_tool/CrashTestApi";
import ReadPets from "./pages/ReadPets";
import PageAnimals from "./pages/PageAnimals";
=======
import './css/App.css'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import AdoptForm from './pages/AdoptForm'
import FunctionNavigation from './dev_tool/FunctionNavigation'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import Auth from './Auth'
import Footer from './components/Footer/Footer'
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import Crashtestapi from './dev_tool/CrashTestApi'
import { useEffect } from 'react'
import Header from './components/Header/Header'
  
function App() {
>>>>>>> ed6a9a3f1788d32f3af5dceabafacc1c09f77d69

function App() {
  const routesWithoutNavbarAndFooter = ["/inscription", "/connexion"];
  const location = useLocation();

  const hideNavbarAndFooter = routesWithoutNavbarAndFooter.includes(
    location.pathname
  );

  return (
    <Auth>
<<<<<<< HEAD
      <div className="App">
        {!hideNavbarAndFooter && <Navbar />}
=======
      <div className='App'>

        {!hideNavbarAndFooter && <Header />}
>>>>>>> ed6a9a3f1788d32f3af5dceabafacc1c09f77d69

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/adoption-formulaire" element={<AdoptForm />} />
          <Route path="/listedesanimaux/:id/*" element={<ReadPets />} />
          <Route path="/listedesanimaux" element={<PageAnimals />} />

          <Route path="/admin" element={<FunctionNavigation />} />
          <Route path="/crashtestapi" element={<Crashtestapi />} />

          <Route path="/inscription" element={<SignUp />} />
          <Route path="/connexion" element={<Login />} />
        </Routes>
        <Link to="./admin">
          {" "}
          <BuildCircleIcon
            className="admin-btn-tool"
            color="secondary"
            sx={{ fontSize: 60 }}
          />{" "}
        </Link>

        {!hideNavbarAndFooter && <Footer />}
      </div>
    </Auth>
  );
}

export default App;
