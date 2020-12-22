import React from 'react';
import { Grid, Menu, Segment, Paginationm, Button, Pagination } from 'semantic-ui-react'

const PaginationExample = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(10); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style ={{ paddingTop : 10, display: "flex" , justifyContent : "center" }} aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li  className='page-link' style={{float : "left"}}>
            <a onClick={() => paginate(number)} href='/discover/!#' className='page-link'>
              {number}
            </a>
         </li>
        ))}
      </ul>
    </nav>
    
  );
};

export default PaginationExample;