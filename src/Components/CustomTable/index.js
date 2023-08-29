import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import CustomFilters from "../CustomFilters";

import "./style.css";

const CustomTable = (props) => {
  return (
    <>
      <CustomFilters
        filterSort={props?.filterSort}
        filterSortValue={props?.filterSortValue}
        setFilterSortValue={props?.setFilterSortValue}
        filterSortValues={props?.filterSortValues}

        filterSearch={props?.filterSearch}
        filterSearchValue={props?.filterSearchValue}
        setFilterSearchValue={props?.setFilterSearchValue}

        dateFilter={props?.dateFilter}
        filterFrom={props?.filterFrom}
        setFilterFrom={props?.setFilterFrom}
        filterTo={props?.filterTo}
        setFilterTo={props?.setFilterTo}
      />
      <div className="customTable">
        <table>
          <thead>
            <tr>
              {props?.headers.map((header) => (
                <th key={header.key}>
                  {header.key !== 'id' ? 
                  <div className="arrowTables">
                    <button><FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon> </button>
                    <button><FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon> </button>
                  </div>
                  : ''}
                  {header.title}</th>
              ))}
            </tr>
          </thead>
          {props?.children}
        </table>
      </div>

    </>
  );
};

export default CustomTable;
