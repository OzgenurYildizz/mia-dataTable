
import React from "react";
import { useRouter } from 'next/router';
import style from "../styles/navbar-style.module.css";

export default function Search({ searchTerm, onSearchTermChange}) {
  const router = useRouter();

 
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Aranan kelimeyi URL'de göstermek için router.push kullan
    router.push(`/search?term=${searchTerm}`);
  };

    return (
      <form onSubmit={handleSearchSubmit} className={style.searchContainer}>
      <input
        type="text"
        placeholder="Name Of The Product .."
        className={style.searchInput}
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      <button type="submit" className={style.searchButton}>Search</button>
    </form>      
    );
}

