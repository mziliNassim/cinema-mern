import React from "react";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";

const PaginationBar = ({ pageCount }) => {
  const navigate = useNavigate();
  let { pageId } = useParams();

  const handlePageClick = ({ selected }) => {
    navigate(`/movies/${selected + 1}/`);
  };

  return (
    <nav
      aria-label="Page navigation example"
      className="flex items-center justify-center w-full col-span-4 my-5"
    >
      <ReactPaginate
        className="inline-flex -space-x-px  text-sm"
        nextLabel=" >"
        previousLabel="< "
        previousClassName={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
        nextClassName={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
        breakLabel="..."
        breakClassName="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        pageClassName="flex items-center justify-center text-center leading-8 w-8 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        activeClassName="flex items-center justify-center h-8 border leading-8 hover:bg-blue-100 hover:text-blue-700 border-gray-700 bg-gray-700 text-white"
        activeLinkClassName="bg-gray-700 text-white w-full h-full"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        forcePage={parseInt(pageId) - 1 || 0}
        renderOnZeroPageCount={null}
      />
    </nav>
  );
};

export default PaginationBar;
