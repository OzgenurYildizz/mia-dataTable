import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";
import CustomDataTable from "../component/CustomDataTable";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/alla")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log({ error }));
  }, []);

  useEffect(() => {
    const results = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, countries]);

  console.log(countries);
  return (
    <div>
      <Navbar searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchButtonClick={() => {
          console.log("Clicked Button. \nCountry name:", searchTerm);
        }}/>
      <CustomDataTable data={searchResults} />
    </div>
  );
}
