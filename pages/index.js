import React, { useEffect, useState } from "react"; 
import axios from "axios";
import style from "../styles/list-style.module.css";
import Navbar from "./navbar";

import CapitalIcon from "../icons/capital-icon";
import LanguageIcon from "../icons/language-icon";


export default function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log({ error }));
  }, []);

  const limitedCountries = countries.slice(0, 5);

  return (
    <div>
      <Navbar/>
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
                        <CapitalIcon /> {" "+country.capital}
                      </h4>
                      <p>LANGUAGE</p>
                      <h4>
                        <LanguageIcon />
                        {" "+firstLanguage}
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
