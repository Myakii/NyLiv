import React from "react";
import "./ReportForm.css";
import axios from "axios";

export default function ReportForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${
        import.meta.env.VITE_REACT_APP_API_URL
      }NyLiv/Back-End/API/Pets/ReportFormAnimals.php`,
      formData
    );

    console.log("Server response:", response.data);
  };
  return (
    <div className="ReportFormAnimals">
      <form onSubmit={handleSubmit} method="post" encType="multpart/form-data">
        J'aime le poisson
      </form>
    </div>
  );
}
