import React from "react";
import style from "../styles/navbar-style.module.css";
import { useEffect, useState } from "react";

export default function Navbar({ searchTerm, onSearchTermChange, onSearchButtonClick }) {
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
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      <button className={style.searchButton} onClick={onSearchButtonClick}>
        Search
      </button>
    </div>
    </nav>
  );
}