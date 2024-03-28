import React from "react";
import _ from "lodash";

const Search = (props) => {
  console.log(props)
const { rowDataCopy, setRowData , headers}= props;
  const handleSearch = (e) => {
    const { value } = e.target;
    setRowData(
      rowDataCopy.filter((item) => {
        return Object.values(_.pick(item,_.map(_.filter(headers, ['searching', true]), 'key')))
          .join("")
          .toLowerCase()
          .includes(value.toLowerCase());
      })
    );
  };
  return (
    <div>
    <input
      type="text"
      placeholder= { "Search here : " + _.map(_.filter(headers, ['searching', true]), 'lebel').join(",")}
      className="form-control"
      style={{ marginTop: 20, marginBottom: 20, width: 700 }}
      onChange={handleSearch}
    />
    </div>
  );
};

export default Search;
