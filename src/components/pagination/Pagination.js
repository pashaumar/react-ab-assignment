import React from "react";
import styles from "./Pagination.module.css";
import PaginationItem from "../paginationItem/PaginationItem";
function Pagination({ numberOfPages, currentPage, setCurrentPage }) {
  const showItems = () => {
    return new Array(numberOfPages)
      .fill(1)
      .map((item, index) => (
        <PaginationItem
          item={item + index}
          key={index}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ));
  };
  const handlePrevClick = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handleNextClick = () => {
    if (currentPage === 10) {
      return;
    }
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const disableButton = (activePage) => {
    if (activePage === currentPage) {
      return {
        opacity: "0.5",
        pointerEvents: "none",
      };
    }
  };
  return (
    <div className={styles.paginationContainer}>
      <button onClick={handlePrevClick} style={disableButton(1)}>
        Prev
      </button>
      {showItems()}
      <button onClick={handleNextClick} style={disableButton(10)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
