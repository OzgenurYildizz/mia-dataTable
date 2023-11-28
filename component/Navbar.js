import React from "react";
import style from "../styles/navbar-style.module.css";

export default function Navbar() {

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
      
    </nav>
  );
}