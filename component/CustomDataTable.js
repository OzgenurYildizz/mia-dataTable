import React from "react";
import style from "../styles/table-style.module.css"
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from "primereact/image";

export default function CustomDataTable({ data }) {
  const customPaginatorTemplate = {
    layout: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
    currentPageReportTemplate: "{currentPage} / {totalPages}",
  };

  const viewImage = (rowData) => {
    return <Image className={style.tableImage} src={rowData.flags.png} alt={rowData.name.common}  preview />;
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
    <DataTable
      value={data}
      dataKey="id"
      className="dataTable"
      scrollable={true} // Scrollable özelliğini etkinleştirin
      scrollHeight="600px"
      paginator={true}
      rows={20}
      emptyMessage="No data found."
      paginatorTemplate={customPaginatorTemplate}
    >
      <Column header="Flag" body={viewImage} />
      <Column field="name.common" header="Country Name" />
      <Column field="capital" header="Capital" />
      <Column header="Languages" body={renderLanguages} />
      <Column header="Currencies" body={renderCurrencies} />
    </DataTable>
  );
}
