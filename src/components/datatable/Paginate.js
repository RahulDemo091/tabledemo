import React from "react";

const Paginate = (props) => {
  
  const {setcurrentPage, pages, currentPage} = props
  const handlePagination = (pages) => {
    setcurrentPage(pages);
  };

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            style={{ cursor: "pointer" }}
          >
            <p className="page-link" onClick={(e) => handlePagination(page)}>
              {page}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
