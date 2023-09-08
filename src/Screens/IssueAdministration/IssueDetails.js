import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomButton from "../../Components/CustomButton";

export const IssueDetail = () => {

  const { id } = useParams();



  const [issue, setIssue] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [message, setMessage] = useState(false)

  const [formData, setFormData] = useState({
    status: '0',
    resolution: ''
  });


  const inActive = () => {
    setShowModal(false)
    setShowModal2(true)
  }
  const Active = () => {
    setShowModal3(false)
    setShowModal4(true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    document.querySelector('.loaderBox').classList.remove("d-none");

    console.log(formData)

    const LogoutData = localStorage.getItem('login');
    fetch(`https://custom.mystagingserver.site/parcel_safe_app/public/api/admin/update-issue/${id}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LogoutData}`
        },
        body: JSON.stringify(formData)
      },
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        document.querySelector('.loaderBox').classList.add("d-none");
        setFormData({
          resolution: ''
        })

      })
      .catch((error) => {
        document.querySelector('.loaderBox').classList.add("d-none");
        console.log(error);
      })
  }
  useEffect(() => {
    document.querySelector('.loaderBox').classList.remove("d-none");
    const LogoutData = localStorage.getItem('login');
    fetch(`https://custom.mystagingserver.site/parcel_safe_app/public/api/admin/view-issue/${id}`,
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
        console.log(data)

        document.querySelector('.loaderBox').classList.add("d-none");
        setIssue(data.inquiry)

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
                Issue Details
              </h2>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className="row mb-3 justify-content-end">
                <div className="col-lg-4 text-end order-1 order-lg-2 mb-3">
                  <button onClick={() => {
                    issue?.status ? setShowModal(true) : setShowModal3(true)
                  }} className="notButton primaryColor fw-bold text-decoration-underline">Mark as {issue?.status ? 'Inactive' : 'Active'}</button>
                  <span className={`statusBadge ${issue?.status == 1 ? 'statusBadgeActive' : 'statusBadgeInactive'}`}>{issue?.status == 1 ? 'Active' : 'Inactive'}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-xl-6 col-md-6 mb-3">
                      <h4 className="secondaryLabel">Name</h4>
                      <p className="secondaryText">{issue?.user?.name}</p>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-3">
                      <h4 className="secondaryLabel">Issue Report</h4>
                      <p className="secondaryText">{issue?.created_at}</p>
                    </div>
                    <div className="col-xl-12 col-md-6 mb-3">
                      <h4 className="secondaryLabel">Issue Title</h4>
                      <p className="secondaryText">{issue?.issue}</p>
                    </div>
                    <div className="col-xl-12 col-md-6 mb-3">
                      <h4 className="secondaryLabel">Message</h4>
                      <p className="secondaryText">{issue?.message}</p>
                    </div>
                    {
                      message == true ? (
                        <div className="col-md-12">
                          <form onSubmit={handleSubmit}>
                            <div className="form-group mb-4">
                              <textarea name="message"
                                placeholder="write message..."
                                value={formData.resolution}
                                className="form-control"
                                rows={10}
                                onChange={(event) => {
                                  setFormData({ ...formData, resolution: event.target.value })
                                  console.log(formData)
                                }}></textarea>
                            </div>
                            <CustomButton variant='primaryButton' text="Send" type="submit"></CustomButton>
                          </form>
                        </div>
                      ) : (
                        <div className="col-xl-12 col-md-12 mb-3">
                          <CustomButton variant='primaryButton' text="Reply" onClick={
                            () => {
                              setMessage(true)
                            }
                          }></CustomButton>
                        </div>
                      )

                    }
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

