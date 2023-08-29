import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faUser,
  faEye,
  faTasks
} from "@fortawesome/free-solid-svg-icons";
import {
  faMessage,
} from "@fortawesome/free-regular-svg-icons";

import "./style.css";

export const Sidebar = (props) => {

  const location = useLocation()
  return (
    <div className={`sidebar ${props.sideClass}`} id="sidebar">
      <ul className="list-unstyled">
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/dashboard') ? 'active' : ''}`} to="/dashboard">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faBorderAll} />
            </span>
            <span className="sideLinkText">Dashboard</span>
          </Link>
        </li>
        {/* <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/roles-management') ? 'active' : ''}`} to="/roles-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="sideLinkText">Roles Management</span>
          </Link>
        </li> */}
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/department-management') ? 'active' : ''}`} to="/department-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faEye} />
            </span>
            <span className="sideLinkText">Data</span>
          </Link>
        </li>
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/user-management') ? 'active' : ''}`} to="/user-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText">User Management</span>
          </Link>
        </li>
        {/* <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/task-view') ? 'active' : ''}`} to="/task-view">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faTasks} />
            </span>
            <span className="sideLinkText">Task View</span>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};
