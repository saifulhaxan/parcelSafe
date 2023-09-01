import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";

export const SafeDetails = () => {

  const { id } = useParams();



  const [profileData, setProfileData] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const inActive = () => {
    setShowModal(false)
    setShowModal2(true)
  }
  const Active = () => {
    setShowModal3(false)
    setShowModal4(true)
  }

  useEffect(() => {
    document.querySelector('.loaderBox').classList.remove("d-none");
    const LogoutData = localStorage.getItem('login');
    fetch(`https://custom.mystagingserver.site/parcel_safe_app/public/api/admin/view-safe/${id}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LogoutData}`
        },
      }
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setProfileData(data.safe)
        document.querySelector('.loaderBox').classList.add("d-none");
        console.log(data)
      })
      .catch((error) => {
        document.querySelector('.loaderBox').classList.add("d-none");
        console.log(error);
      })
  }, [id]);


  return (
    <>
      <DashboardLayout>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12 mb-2">
              <h2 className="mainTitle">
                <BackButton />
                Safe Details
              </h2>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className="row mb-3 justify-content-end">
                <div className="col-lg-4 text-end order-1 order-lg-2 mb-3">
                  <span className={`statusBadge ${profileData.status == 1 ? 'statusBadgeActive' : 'statusBadgeInactive'}`}>{profileData.status == 1 ? 'Active' : 'Inactive'}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-xl-4 col-md-4 mb-3">
                      <h4 className="secondaryLabel">Safe Serial Number</h4>
                      <p className="secondaryText">{profileData.serial_number}</p>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-3">
                      <h4 className="secondaryLabel">Safe Name</h4>
                      <p className="secondaryText">{profileData.name}</p>
                    </div>

                    <div className="col-xl-4 col-md-4 mb-3">
                      <h4 className="secondaryLabel">Address</h4>
                      <p className="secondaryText">{profileData.address}</p>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-3">
                      <h4 className="secondaryLabel">City</h4>
                      <p className="secondaryText">{profileData.city}</p>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-3">
                      <h4 className="secondaryLabel">Postal Code</h4>
                      <p className="secondaryText">{profileData.postal_code}</p>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-3">
                      <h4 className="secondaryLabel">State</h4>
                      <p className="secondaryText">{profileData.state}</p>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-3">
                      <h4 className="secondaryLabel">Safe State</h4>
                      <p className="secondaryText">{profileData.safe_state == 0 ? 'Offline' : 'Online'}</p>
                    </div>
                    <div className="col-xl-4 mb-3">
                      <h4 className="secondaryLabel">Subscription Status</h4>
                      <p className="secondaryText">{profileData.subscription_status == 0 ? 'Expired' : 'Online'}</p>
                    </div>
                    <div className="col-xl-4 mb-3">
                      <h4 className="secondaryLabel">Safe Assosiate</h4>
                      <p className="secondaryText">{profileData?.user_assosiation_date == null ? 'Not Assigned' : profileData?.user_assosiation_date}</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CustomModal show={showModal} close={() => { setShowModal(false) }} action={inActive} heading='Are you sure you want to mark this user as inactive?' />
        <CustomModal show={showModal2} close={() => { setShowModal2(false) }} success heading='Marked as Inactive' />

        <CustomModal show={showModal3} close={() => { setShowModal3(false) }} action={Active} heading='Are you sure you want to mark this user as Active?' />
        <CustomModal show={showModal4} close={() => { setShowModal4(false) }} success heading='Marked as Active' />
      </DashboardLayout>
    </>
  );
};

