import React from "react";
import style from "../styles/navbar-style.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [searchInput, setSearchInput] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Pressed Enter. \nCountry name:", searchInput);
    }
  };

  return (
    <nav className={style.navbar}>
      <div className={style.logoContainer}>
        <img
          src="/countriesLogo.svg" 
          alt="Logo"
          className={style.logo}
        />
        <spam>World Flags ~</spam>
      </div>
      <div className={style.searchContainer}>
        <input
          type="text"
          placeholder="Name Of The Country .."
          className={style.searchInput}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress} //neden üstü çizili ?
        />
        <button 
        className={style.searchButton}
        onClick={() => {console.log("Clicked Button. \nCountry name:", searchInput)}}
        >Search</button>
      </div>
    </nav>
  );
}
