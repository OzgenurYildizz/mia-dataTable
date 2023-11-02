import React from "react";
import style from "../styles/navbar-style.module.css";

export default function Navbar({ searchTerm, onSearchTermChange, onSearchButtonClick }) {

  return (
    <nav className={style.navbar}>
      <div className={style.logoContainer}>
        <img
          src="/productsLogo.png" 
          alt="Logo"
          className={style.logo}
        />
        <spam>Products ~</spam>
      </div>
        
      <div className={style.searchContainer}>
      <input
        type="text"
        placeholder="Name Of The Product .."
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