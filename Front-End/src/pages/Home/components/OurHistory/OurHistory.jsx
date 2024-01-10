import React from "react";
import "./OurHistory.css";

export default function OurHistory() {
  const ourTextHistory =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <section className="our-history centered-padding-div">
      <article>
        <h4>Notre histoire</h4>

        <p>{ourTextHistory}</p>

        <button className="btn btn-blue">Voir plus...</button>
      </article>

      <div className="our-history-img">
        <img src="./Assets/Imgs/3d7b12e99a796fd3cccd9490ba6d958d.jpg"></img>
      </div>
    </section>
  );
}
