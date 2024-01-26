import "./css/App.css";
import Navbar from "./components/Header/Header";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdoptForm from "./pages/AdoptForm/AdoptForm";
import FunctionNavigation from "./dev_tool/FunctionNavigation";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Auth from "./Auth";
import Footer from "./components/Footer/Footer";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import Crashtestapi from "./dev_tool/CrashTestApi";
import Report from "./pages/Report/Report";
import ConditionAdoption from "./pages/ConditionAdoption/ConditionAdoption";
import Adoption from "./pages/Adoption/Adoption";
import ModifyForm from "./pages/ReadPets/components/ModifyForm";
import ReportForm from "./pages/Report/components/ReportForm/ReportForm";
import AddFormAnimals from "./pages/AddFormAnimals/AddFormAnimals";

function App() {
  const routesWithoutNavbarAndFooter = [
    "/inscription",
    "/connexion",
    "/adoption",
    "/adoption/filtre",
    "/adoption-formulaire",
  ];
  const location = useLocation();

  const hideNavbarAndFooter = routesWithoutNavbarAndFooter.includes(
    location.pathname
  );

  return (
    <Auth>
      <div className="App">
        {!hideNavbarAndFooter && <Navbar />}

        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Partie animaux */}
          <Route path="/condition-adoption" element={<ConditionAdoption />} />
          {/* Page de tous les animaux */}
          <Route path="/listedesanimaux" element={<Adoption />} />
          {/* <Route path="/listedesanimaux" element={<PageAnimals />} /> */}
          {/* Page d'un Animal */}
          {/* <Route path="/listedesanimaux/:id/*" element={<ReadPets />} /> */}

          {/* Formulaire d'adoption */}
          <Route path="/formulaire-adoption" element={<AdoptForm />} />

          {/* Formulaire d'ajout d'un Animal */}
          <Route path="/formulaire-ajout-animal" element={<AddFormAnimals />} />
          {/* Formulaire de modification d'un Animal */}
          <Route
            path="/modification-formulaire/:id/*"
            element={<ModifyForm />}
          />

          {/* Partie des Admins */}
          <Route path="/admin" element={<FunctionNavigation />} />
          <Route path="/crashtestapi" element={<Crashtestapi />} />

          {/* Partie authentification pour les adoptants */}
          <Route path="/inscription" element={<SignUp />} />
          <Route path="/connexion" element={<Login />} />

          {/* Partie signalement */}
          <Route path="/signalement" element={<Report />} />
          <Route
            path="/signalement/formulaire-report"
            element={<ReportForm />}
          />
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
