import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

function Paginate(props) {
  const { itemsCount, currentPage, pageSize, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div>
      <nav
        className="pagination is-rounded"
        role="navigation"
        aria-label="pagination"
      >
        <ul className="pagination-list">
          {pages.map((page) => (
            <li key={page}>
              <a
                className={
                  page === currentPage
                    ? "pagination-link is-current"
                    : "pagination-link"
                }
                aria-label="Goto page 1"
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
Paginate.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Paginate;
