import React, { useState } from "react";
import style from "../styles/table-style.module.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from "primereact/image";
import { Dropdown } from "primereact/dropdown";

const CustomDataTable = ({ data }) => {
  const customPaginatorTemplate = {
    layout:
      "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
    currentPageReportTemplate: "{currentPage} / {totalPages}",
  };

  const rowsPerPageOptions = [10, 20, 50, 100];

  const [rows, setRows] = useState(20); // Varsayılan olarak 20 kayıt göster

  const handleRowsChange = (event) => { //event: kullanıcının seçtiği row sayısı
    setRows(event.value);
  };

  const viewImage = (rowData) => {
    return <Image className={style.tableImage} src={rowData.flags.png} alt={rowData.name.common} preview />;
  };

  const renderLanguages = (rowData) => {
    const languages = rowData.languages;

    if (languages) {
      const languageList = Object.values(languages).slice(0, 2).join(", "); //ilk iki dili almak için
      return languageList;
    }

    return null; // Eğer diller mevcut değilse veya boşsa, boş bir değer döndürür
  };

  const renderCurrencies = (rowData) => {
    const currencies = rowData.currencies;

    if (currencies && typeof currencies === "object") {
      const currencySymbols = Object.values(currencies).map((currency) => currency.symbol);
      return currencySymbols.join(", ");
    }

    return null; // currencies özelliği yok veya boşsa, boş bir değer döndür
  };

  return (
    <div>
      <Dropdown
        value={rows}
        options={rowsPerPageOptions}
        onChange={handleRowsChange}
      />
      <DataTable
        value={data}
        dataKey="id"
        className="dataTable"
        scrollable={true}
        scrollHeight="500px"
        paginator={true}
        rows={rows}
        emptyMessage="No data found."
        paginatorTemplate={customPaginatorTemplate}
      >
        <Column header="Flag" body={viewImage} />
        <Column field="name.common" header="Country Name" />
        <Column field="capital" header="Capital" />
        <Column header="Languages" body={renderLanguages} />
        <Column header="Currencies" body={renderCurrencies} />
      </DataTable>
    </div>
  );
};

export default CustomDataTable;
