import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemCount, pageSize, currentPage } = props;
  console.log(props.currentPage);

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <div>
      <nav aria-label='Page navigation example'>
        <ul className='pagination'>
          {pages.map(page => {
            return (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <a
                  onClick={() => props.onPageChnage(page)}
                  className='page-link'
                  href='#'
                >
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
