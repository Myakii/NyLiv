// Importation react
import { Link, Route, Routes, useLocation } from "react-router-dom";

// Importation css et icônes
import "./css/App.css";
import "./css/button.css";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";

// Importation components
import Navbar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ModifyForm from "./pages/ReadPets/components/ModifyForm";
import ReportForm from "./pages/Report/components/ReportForm/ReportForm";

// Importation authentification
import Auth from "./Auth";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

// Importation animaux
import AdoptForm from "./pages/AdoptForm/AdoptForm";
import ConditionAdoption from "./pages/ConditionAdoption/ConditionAdoption";
import Adoption from "./pages/Adoption/Adoption";
import AddFormAnimals from "./pages/AddFormAnimals/AddFormAnimals";
import Report from "./pages/Report/Report";

import Home from "./pages/Home/Home";
import FunctionNavigation from "./dev_tool/FunctionNavigation";
import Crashtestapi from "./dev_tool/CrashTestApi";

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
            path="/signalement/formulaire-signalement"
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
