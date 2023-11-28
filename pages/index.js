import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import CustomDataTable from "../component/CustomDataTable";
import PaginationControls from '../component/PaginationControls';
import Search from "../component/Search";
import { useRouter } from 'next/router';

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const { query } = router;
  const page = query.page ? Number(query.page) : 1;
  const per_page = query.per_page ? Number(query.per_page) : 10;
  const [totalItems, setTotalItems] = useState(0); 

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
          setTotalItems(result.totalItems);
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
      <Navbar/>
      <Search 
     searchTerm={searchTerm}
     onSearchTermChange={setSearchTerm}/>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <CustomDataTable data={data} searchTerm={searchTerm}/>
      )}
      <PaginationControls
        hasNextPage={data.length >= per_page}
        hasPrevPage={page > 1}
        totalItems={totalItems}
      />
    </div>
  );
}
