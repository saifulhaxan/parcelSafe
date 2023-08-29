import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { currentUser } from "./../../Config/Data";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomButton from "../../Components/CustomButton";

import './style.css'


const Profile = () => {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({});

    useEffect(() => {
        document.title = 'Parcel Safe | My Profile';

        setUserData(currentUser);
    }, []);

    return (
        <>
            <DashboardLayout>
                <div className="dashCard mb-4">
                    <div className="row mb-3">
                        <div className="col-12">
                            <h2 className="mainTitle">
                                My Profile
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-3">
                        {userData ?
                            <div className="col-12">
                                <div className="row mb-3">
                                    <div className="col-lg-4 order-2 order-lg-1 mb-3">
                                        <div className="profileImage">
                                            <img src={userData.image} alt="User" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="row mb-4">
                                            <div className="col-lg-6 mb-3">
                                                <h4 className="secondaryLabel">Full Name</h4>
                                                <p className="secondaryText">{userData.name}</p>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <h4 className="secondaryLabel">Country</h4>
                                                <p className="secondaryText">{userData.country}</p>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <h4 className="secondaryLabel">Email</h4>
                                                <p className="secondaryText">{userData.country}</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <div class="row">
                                                    <div className="col-md-6 mb-3">
                                                        <h4 className="secondaryLabel">State</h4>
                                                        <p className="secondaryText">{userData.state}</p>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <h4 className="secondaryLabel">City</h4>
                                                        <p className="secondaryText">{userData.city}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <h4 className="secondaryLabel">Phone Number</h4>
                                                <p className="secondaryText">{userData.phone}</p>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <h4 className="secondaryLabel">Postal/Zip Code</h4>
                                                <p className="secondaryText">{userData.postCode}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <CustomButton type="button" variant="primaryButton" className="me-3 mb-2" text="Edit Profile" onClick={() => { navigate('/profile/edit-profile') }} />
                                        <CustomButton type="button" variant="secondaryButton" className="me-3 mb-2" text="Change Password" onClick={() => { navigate('/profile/change-password') }} />
                                    </div>

                                </div>
                            </div> : ''}

                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

export default Profile;
