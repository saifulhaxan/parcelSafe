import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { currentUser } from "./../../Config/Data";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import CustomModal from "../../Components/CustomModal";

import './style.css'

const ChangePassword = () => {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({});

    const [showModal, setShowModal] = useState(false);

    const handleClickPopup = ()=> {
        setShowModal(true);
    }

    useEffect(() => {

        document.title = 'Parcel Safe | Change Password';

        setUserData(currentUser);
    }, []);

    return (
        <>
            <DashboardLayout>
                <div className="dashCard mb-4">
                    <div className="row mb-3">
                        <div className="col-12">
                            <h2 className="mainTitle">
                                <BackButton />
                                <span className="px-2">Change Password</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-xl-4 col-lg-4">
                            <form>
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <CustomInput label="Current Password" labelClass="mainLabel" required type="password" placeholder="Enter Current Password" inputClass="mainInput" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <CustomInput label="New Password" labelClass="mainLabel" required type="password" placeholder="Enter New Password" inputClass="mainInput" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <CustomInput label="Confirm New Password" labelClass="mainLabel" required type="password" placeholder="Confirm New Password" inputClass="mainInput" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <CustomButton type="button" variant="primaryButton" className="me-3 mb-2" text="Update" onClick={handleClickPopup} />
                                    </div>
                                    <div className="col-12r">
                                        <CustomButton type="button" className="me-3 mb-2 bg-transparent border-0" text="Cancel" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <CustomModal show={showModal} close={()=>{setShowModal(false)}} success heading='Your Password is Successfully Updated!' />
            </DashboardLayout>
        </>
    );
};

export default ChangePassword;
