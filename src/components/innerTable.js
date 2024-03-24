import React, { useEffect, useState } from 'react';
import data from '../assets/SampleData.json';
import _ from 'lodash';

const Table = () => {
    let showTag = false;
    const pageSize = 10;  // page size that contains a fix amount of row to be displayed.
    const [searchInput, setSearchInput] = useState(''); // set state to handle search queries
    const [filteredResults, setFilteredResults] = useState([]);  // set state to handle search filtered data
    const[currentPage, setcurrentPage] = useState(1);  // set state for current page  
    const[order, setorder] = useState("ASC");  // set state for asc & desc sort order  
    const[paginatedRows, setpaginatedRows] = useState([]); // set state to set 

    useEffect(() => {
    setpaginatedRows(_(data).slice(0).take(pageSize).value());
    }, [])

    const pageCount = data? Math.ceil(data.length/pageSize) : 0;
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount+1)

    const pagination = (page) => {
        setcurrentPage(page);
        const startIndex = (page -1 ) * pageSize;
        const paginatedPost = _(data).slice(startIndex).take(pageSize).value();
        setpaginatedRows(paginatedPost);
    }

    const sorting = (col) => {
      debugger
      if(order === "ASC") {
        const sorted = [...paginatedRows].sort((a,b) => a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
        setpaginatedRows(sorted);
        setorder("DSC");
      } 
       if(order === "DSC") {
        const sorted = [...paginatedRows].sort((a,b) => a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
        setpaginatedRows(sorted);
        setorder("ASC");
      } 
    }
    
     const searchItems = (searchValue) => {
      debugger
      setSearchInput(searchValue)
      if (searchInput !== '') {
        const filteredData = data.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        if (filteredData.length == 0){
          showTag = true;
        }
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(data)
    }
     } 

  return (
    <div className='Container responsive'>
        <input type='text' placeholder='search here...' className='form-control' 
        style={{marginTop:20, marginBottom: 20, width: 400}} 
        onKeyUp={(e)=> searchItems(e.target.value)}  />
      <table className='table table-bordered'>
        <thead className='thead-dark'>
            <tr>
                <th>ID</th>
                <th onClick={() => sorting('first_name')}>First Name</th>
                <th onClick={() => sorting('last_name')}>Last Name</th>
                <th onClick={() => sorting('email')}>Email</th>
                <th onClick={() => sorting('gender')}>Gender</th>
                <th onClick={() => sorting('mobile')}>Mobile</th>
            </tr>
        </thead>
        <tbody>
        {searchInput.length > 1 ? (
          filteredResults.map((row, index)=> (
              <tr key={index}>
                  <td>{row.id}</td>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td> 
                <td>{row.email}</td>
                <td>{row.gender}</td> 
                <td>{row.mobile}</td>
              </tr>
          ))
          
        ) : paginatedRows.map((row, index)=> (
          <tr key={index}>
              <td>{row.id}</td>
            <td>{row.first_name}</td>
            <td>{row.last_name}</td> 
            <td>{row.email}</td>
            <td>{row.gender}</td> 
            <td>{row.mobile}</td>
          </tr>
      ))}
        </tbody>
      {showTag ? "No data found."
      : ""}
      </table>
      <nav className='d-flex justify-content-center'>
        <ul className='pagination'>
            {
            pages.map( (page)=> (
            <li className= { page === currentPage ? "page-item active" : "page-item"} style={{cursor:'pointer'}}>
             <p className= "page-link" onClick={(e)=> pagination(page)} >{page}</p>   
            </li> 
            ))
            }
        </ul>
      </nav>
    </div>
  )
}

export default Table
