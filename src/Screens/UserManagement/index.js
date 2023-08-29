import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEye, faCheck, faTimes, faFilter } from "@fortawesome/free-solid-svg-icons";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "./../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";

import CustomPagination from "../../Components/CustomPagination"
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";

import { userData } from "./../../Config/Data";

import "./style.css";

export const UserManagement = () => {


  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [inputValue, setInputValue] = useState('');

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const inActive = () => {
    setShowModal(false)
    setShowModal2(true)
  }
  const ActiveMale = () => {
    setShowModal3(false)
    setShowModal4(true)
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const filterData = data.filter(item =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);



  useEffect(() => {
    document.title = 'Parcel Safe | User Management';
    const LogoutData = localStorage.getItem('login');

    fetch('https://custom.mystagingserver.site/parcel_safe_app/public/api/admin/user-listing',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LogoutData}`
        },
      }
    )

      .then(response =>
        response.json()
      )
      .then((data) => {
        console.log(data.users)
        setData(data.users);
      })
      .catch((error) => {
        console.log(error)
      })


  }, []);

  const maleHeaders = [
    {
      key: "id",
      title: "S.No",
    },
    {
      key: "username",
      title: "Name",
    },
    {
      key: "email",
      title: "Email Address",
    },
    {
      key: "number",
      title: "Phone",
    },
    {
      key: "numberofsafe",
      title: "No Of Safe",
    },
    {
      key: "registered",
      title: "Registered On",
    },
    {
      key: "signim",
      title: "Last Sign In",
    },
    {
      key: "status",
      title: "Status",
    },
    {
      key: "actions",
      title: "Actions",
    },
  ];

  const removeUser = ((itemRemove) => {
    console.log(userData);
    const dupArray = [...userData]
    dupArray.splice(itemRemove, 1);
    setData(dupArray)
    console.log(dupArray);
  })

  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row mb-3 justify-content-between">
                  <div className="col-md-6 mb-2">
                    <h2 className="mainTitle">User Management</h2>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="addUser">
                      <CustomButton type="button" text="Add User" className="primaryButton" />
                      <CustomInput type="text" placeholder="Search Here..." value={inputValue} inputClass="mainInput" onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <CustomTable
                      headers={maleHeaders}

                    >
                      <tbody>
                        {currentItems.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="text-capitalize">
                              {item.name}
                            </td>
                            {/* <td>{item.username}</td> */}
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td>13</td>
                            <td>{item.created_at}</td>
                            <td>{item.updated_at}</td>
                            <td className={item.status  == 1 ? 'greenColor' : "redColor"}>{item.status == 1 ? 'Active' : "Inactive"}</td>
                            <td>
                              <Dropdown className="tableDropdown">
                                <Dropdown.Toggle variant="transparent" className="notButton classicToggle">
                                  <FontAwesomeIcon icon={faEllipsisV} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end" className="tableDropdownMenu">
                                  <button onClick={() => removeUser(index)} className="tableAction"><FontAwesomeIcon icon={faEye} className="tableActionIcon" />Remove</button>
                                  <button onClick={() => {
                                    item.status ? setShowModal(true) : setShowModal3(true)
                                  }} className="tableAction">{item.status ? <FontAwesomeIcon icon={faTimes} className="tableActionIcon" /> : <FontAwesomeIcon icon={faCheck} className="tableActionIcon" />}{item.status ? 'Inactive' : "Active"}</button>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </CustomTable>
                    <CustomPagination
                      itemsPerPage={itemsPerPage}
                      totalItems={data.length}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CustomModal show={showModal} close={() => { setShowModal(false) }} action={inActive} heading='Are you sure you want to mark this user as inactive?' >Hello World</CustomModal>
          <CustomModal show={showModal2} close={() => { setShowModal2(false) }} success heading='Marked as Inactive' />

          <CustomModal show={showModal3} close={() => { setShowModal3(false) }} action={ActiveMale} heading='Are you sure you want to mark this user as Active?' />
          <CustomModal show={showModal4} close={() => { setShowModal4(false) }} success heading='Marked as Active' />



        </div>
      </DashboardLayout>
    </>
  );
};
