import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import { country, currentUser } from "./../../Config/Data";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import { SelectBox } from "../../Components/CustomSelect";
import CustomModal from "../../Components/CustomModal";

import './style.css'

const EditProfile = () => {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({});
    const [userNewData, setUserNewData] = useState({})
    const [optionData, setOptionData] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleClickPopup = ()=> {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
        navigate('/profile')
    }


    useEffect(() => {

        document.title = 'Parcel Safe | Edit Profile';
        setOptionData(country);
        setUserData(currentUser);
    },);



    return (
        <>
            <DashboardLayout>
                <div className="dashCard mb-4">
                    <div className="row mb-3">
                        <div className="col-12">
                            <h2 className="mainTitle">
                                <BackButton />
                                Edit Profile
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-3">
                        {userData ?
                            <div className="col-12">
                                <form>
                                    <div className="row mb-3">
                                        <div className="col-lg-4 order-2 order-lg-1 mb-3">
                                            <div className="profileImage">
                                                <img src={userData.image} alt="User" />
                                                <input type="file" accept="img/*" className="d-none" id="profileImage" onChange={(event) => { setUserNewData({ ...userNewData, image: event.target.value }) }} />
                                                <label htmlFor="profileImage" className="imageUploadButton"><FontAwesomeIcon icon={faCamera} /></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-12 mb-3">
                                                    <CustomInput label="Name" labelClass="mainLabel" required type="text" placeholder="Enter Name" inputClass="mainInput" onChange={(event) => { setUserNewData({ ...userNewData, name: event.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 mb-3">
                                                    <h4 className="secondaryLabel">Email Address</h4>
                                                    <p className="secondaryText">{userData.email}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 mb-3">
                                                    <CustomInput label="Phone Number" labelClass="mainLabel" required type="number" placeholder="Phone Number" inputClass="mainInput" onChange={(event) => { setUserNewData({ ...userNewData, name: event.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <SelectBox selectClass="mainInput" name="Select Country" label="Country" required option={optionData}
                                                    onChange={(event) => { setUserNewData({ ...userNewData, country: event.target.value }) }}
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <SelectBox selectClass="mainInput" name="Select State" label="State" required option={optionData} />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <SelectBox selectClass="mainInput" name="Select City" label="City" required option={optionData} />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                <CustomInput label="Postal/Zip Code*" labelClass="mainLabel" required type="number" placeholder="Enter Postal/Zip Code*" inputClass="mainInput" onChange={(event) => { setUserNewData({ ...userNewData, name: event.target.value }) }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <CustomButton type="button" variant="primaryButton" className="me-3 mb-2" text="Save" onClick={handleClickPopup} />
                                            <CustomButton type="button" variant="secondaryButton" className="me-3 mb-2" text="Cancel" onClick={() => { navigate('/profile') }} />
                                        </div>

                                    </div>
                                </form>
                            </div> : ''}

                    </div>
                </div>
                <CustomModal show={showModal} close={handleClose} success heading='Your profile is Successfully Updated! Continue' />
            </DashboardLayout>
        </>
    );
};

export default EditProfile;
