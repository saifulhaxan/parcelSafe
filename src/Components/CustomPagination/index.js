import './style.css';

const CustomPagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="paginationBar align-items-center">
        <p>Showing {itemsPerPage} out of {totalItems} Entries</p>
        <ul>
          <li><button>Prev</button></li>
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
            </li>
          ))}
          <li><button>Next</button></li>
        </ul>
      </div>
    );
  };
  
  export default CustomPagination;

