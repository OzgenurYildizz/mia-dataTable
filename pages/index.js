import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import CustomDataTable from "../component/CustomDataTable";
import PaginationControls from '../component/PaginationControls';
import { useRouter } from 'next/router';

export default function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { query } = router;

  const page = query.page ? Number(query.page) : 1;
  const per_page = query.per_page ? Number(query.per_page) : 5;

  const perPageOptions = [5, 10, 20, 50];
  const [selectedPerPage, setSelectedPerPage] = useState(per_page);

  const handlePerPageChange = (value) => {
    setSelectedPerPage(value);
    router.push(`/?page=${page}&per_page=${value}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${per_page}&skip=${(page - 1) * per_page}`
        );
        if (response.ok) {
          const result = await response.json();
          setData(result.products);
        } else {
          console.error('API veri çekme hatası');
        }
      } catch (error) {
        console.error('API veri çekme hatası', error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [page, per_page]);

  useEffect(() => {
    if (data.length > 0) {
      const results = data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchTerm, data]);

  return (
    <div>
      <Navbar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchButtonClick={() => {
          console.log("Clicked Button. \nCountry name:", searchTerm);
        }}
      />
     
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <CustomDataTable data={searchResults}/>
      )}
      <PaginationControls
        hasNextPage={data.length >= per_page}
        hasPrevPage={page > 1}
      />
    </div>
  );
}
