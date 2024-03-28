import React, {useState} from 'react'
import {FaSort} from 'react-icons/fa6'

export default function Table(props) {
  const {headers, rowData, startIndex, pageSize, setRowData} = props;
  const [order, setorder] = useState("ASC");

  const handleSorting = (col) => {
    // function called when table Header clicked.
    if (order === "ASC") {
      const sorted = rowData.sort((a, b) =>
        a[col].toString().toLowerCase() > b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setRowData(sorted); // rows seleted based to sorting condition
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = rowData.sort((a, b) =>
        a[col].toString().toLowerCase() < b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setRowData(sorted);
      setorder("ASC");
    }
  };

  return (
    <div>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            {headers.map((item) => (
              <th>{item.lebel}
              { item.sorting == true ? ( <FaSort onClick={() => handleSorting(item?.key)}></FaSort> ) : (<></>) }
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.length > 0 ? (
            rowData
              .slice(startIndex, startIndex + pageSize)
              ?.map((item, index) => {
                return (
                  <tr key={index}>
                    {headers?.map((head) => (
                      <td>{head.render(item)}</td>
                    ))}
                  </tr>
                );
              })
          ) : (
            <h4>No data found.</h4>
          )}
        </tbody>
      </table>
    </div>
  )
}
