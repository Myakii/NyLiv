import React, { useEffect } from "react";
import "./Report.css";
import ReportHeader from "./components/ReportHeader/ReportHeader";
import ReportInformation from "./components/ReportInformation/ReportInformation";
import OurPartner from "../Home/components/OurPartner/OurPartner";
import "../Home/components/OurPartner/OurPartner.css";
import ReportThanking from "./components/ReportThanking/ReportThanking";
import { Link } from "react-router-dom";

export default function Report() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="report-container">
      <ReportHeader />

      <ReportInformation />

      <ReportThanking />

      <div className="to-help-us centered-padding-div">
        <h2 className="text-center">
          Pour nous soutenir autrement, vous pouvez...
        </h2>

        <nav className="nav-items">
          <Link to="/condition-adoption">
            <button className="btn-orange btn help-btn">
              Adopter un compagnon
            </button>
          </Link>

          <Link to="/">
            <button className="btn-orange btn help-btn">Faire un don</button>
          </Link>
        </nav>
      </div>

      {/* OurPartner from Home Folder */}
      <OurPartner />
    </div>
  );
}
