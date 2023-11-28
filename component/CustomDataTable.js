import React, { useMemo } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function CustomDataTable({ data, searchTerm }) {
  // Arama terimine göre filtreleme yap
  const filteredData = useMemo(() => {
    return data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  return (
    <div>
      <DataTable 
        value={filteredData}
        className="dataTable"
        scrollable={true}
        scrollHeight="500px"
      >
        <Column field="thumbnail" header="Resim" body={imageBodyTemplate} />
        <Column field="title" header="Başlık" />
        <Column field="category" header="Kategori" />
        <Column field="price" header="Fiyat" />
        <Column field="rating" header="Puan" />
        <Column field="stock" header="Stok" />
        <Column field="brand" header="Marka" />
      </DataTable>    
    </div>
  );
}

function imageBodyTemplate(data) {
  return <img src={data.thumbnail} alt={data.title} width="100" />;
}

export default CustomDataTable;
