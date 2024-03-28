import _ from "lodash";
import React, { useState } from "react";
import Search from "./Search";
import Paginate from "./Paginate";
import Table from "./Table";

const DataTable = (props) => {
  const pageSize = 10;
  const { row, headers } = props;
  const [rowData, setRowData] = useState([...row]);
  const [rowDataCopy, setRowDataCopy] = useState([...row]);
  const [currentPage, setcurrentPage] = useState(1);

  const pageCount = rowData ? Math.ceil(rowData.length / pageSize) : 0;
  const pages = _.range(1, pageCount + 1);
  const startIndex = (currentPage - 1) * pageSize;

  return (
    <div className="Container responsive">
      <Search setRowData={setRowData} rowDataCopy={rowDataCopy} headers= {headers}  />
      <Table headers= {headers} rowData={rowData} startIndex={startIndex} pageSize= {pageSize} setRowData={setRowData} />
      <Paginate pages={pages} currentPage={currentPage} setcurrentPage={setcurrentPage} />
    </div>
  );
};

export default DataTable;
