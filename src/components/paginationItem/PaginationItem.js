import React from "react";

function PaginationItem({ item, currentPage, setCurrentPage }) {
  const activePageStyle = () => {
    if (currentPage === item) {
      return {
        background: "none",
        border: "none",
        outline: "none",
      };
    }
  };
  return (
    <button onClick={() => setCurrentPage(item)} style={activePageStyle()}>
      {item}
    </button>
  );
}

export default PaginationItem;
