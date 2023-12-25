<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { authContext, useAuth } from "../../Auth";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const auth = useAuth(authContext);
=======
import React, { useEffect, useState } from 'react';
import './Header.css';
import { authContext, useAuth } from '../../Auth';
import Navbar from './components/Navbar/Navbar.jsx';
import AccountHeader from './components/AccountHeader/AccountHeader.jsx';



export default function Header() {
>>>>>>> ed6a9a3f1788d32f3af5dceabafacc1c09f77d69

  const [user, setUser] = useState({});

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (auth) {
      setIsLoggedIn(true);
      setUser(auth);
    }
  }),
    [auth];

  return (
<<<<<<< HEAD
    <header className="header centered-padding-div">
      <nav className="navbar-left">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/">
              <h3>J'adopte</h3>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/">
              <h3>Je signale</h3>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="logo">
        <Link to="/">
          <img
            className="navbar-nyliv-logo w-52"
            src="/Assets/Logo/NyLiv_Logo.png"
            alt="Logo de NyLiv"
          />
        </Link>
      </div>

      <nav className="navbar-right">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/">
              <h3>Accompagnez-nous</h3>
            </Link>
          </li>
=======
    <header className="header">

        <Navbar />

        <AccountHeader />
        
>>>>>>> ed6a9a3f1788d32f3af5dceabafacc1c09f77d69

          <li className="nav-item">
            <MenuIcon sx={{ fontSize: 60 }} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
