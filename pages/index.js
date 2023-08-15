import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../styles/list-style.module.css";
import Navbar from "./navbar";

import CapitalIcon from "../icons/capital-icon";
import LanguageIcon from "../icons/language-icon";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log({ error }));
  }, []);

  useEffect(() => {
    const results = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, countries]);

  const limitedCountries = searchResults.slice(0, 10);

  return (
    <div>
      <Navbar />
      <div className={style.searchContainer}>
        <input
          type="text"
          placeholder="Name Of The Country .."
          className={style.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className={style.searchButton}
          onClick={() => {
            console.log("Clicked Button. \nCountry name:", searchTerm);
          }}
        >
          Search
        </button>
      </div>
      {limitedCountries.map((country) => {
        const firstLanguageKey = Object.keys(country.languages)[0];
        const firstLanguage = country.languages[firstLanguageKey];

        return (
          <div key={country.name.common}>
            <ul className={style.list}>
              <li className={style.item}>
                <img
                  src={country.flags.png}
                  alt={`${country.name.common} Flag`}
                />
                <div className={style.content}>
                  <div>
                    <h2>{country.name.common}</h2>
                    <div className={style.info}>
                      <p>CAPITAL CITY</p>
                      <h4>
                        <CapitalIcon /> {" " + country.capital}
                      </h4>
                      <p>LANGUAGE</p>
                      <h4>
                        <LanguageIcon />
                        {" " + firstLanguage}
                      </h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
