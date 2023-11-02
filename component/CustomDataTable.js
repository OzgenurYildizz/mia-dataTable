import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function CustomDataTable({ data, perPage }) {

  return (
    <div>
    <DataTable 
    value={data.slice(0, perPage)}
    className="dataTable"
    scrollable={true}
    scrollHeight="500px"
    >
      <Column field="thumbnail" header="Resim" body={imageBodyTemplate} />
      <Column field="title" header="Başlık" />
      <Column field="category" header="Katagori" />
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
