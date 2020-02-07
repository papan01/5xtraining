import React from 'react';
import PropTypes from 'prop-types';
import { isNumber } from 'util';
import './style.scss';

function pagination(currentPage, pageCount, delta = 2) {
  const separate = (a, b) => [
    a,
    ...({
      0: [],
      1: [b],
      2: [a + 1, b],
    }[b - a] || ['...', b]),
  ];

  return Array(delta * 2 + 1)
    .fill()
    .map((_, index) => currentPage - delta + index)
    .filter((page) => page > 0 && page <= pageCount)
    .flatMap((page, index, { length }) => {
      if (!index) return separate(1, page);
      if (index === length - 1) return separate(page, pageCount);

      return [page];
    });
}

function pageActive(currentPage, pageIndex) {
  if (currentPage === pageIndex) return 'active';
  return '';
}

const Pagination = ({ currentPage, numPages, navigate }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const pages = pagination(currentPage, numPages);
  return (
    <ol className="post-pagination">
      {!isFirst && (
        <li>
          <button type="button" onClick={() => navigate(currentPage - 1)} onKeyPress={() => {}}>上一頁</button>
        </li>
      )}
      {pages.map((page) => (isNumber(page) ? (
        <li key={`pagination-number${page}`} className={`${pageActive(currentPage, page)}`}>
          <button type="button" onClick={() => navigate(page)} onKeyPress={() => {}}>{page}</button>
        </li>
      ) : (
        <span key="ellipsis">{page}</span>
      )))}
      {!isLast && (
        <li>
          <button type="button" onClick={() => navigate(currentPage + 1)} onKeyPress={() => {}}>下一頁</button>
        </li>
      )}
    </ol>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Pagination;
