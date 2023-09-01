import { useState, useEffect } from "react";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomInput from '../../Components/CustomInput';
import { SelectBox } from "../../Components/CustomSelect";
import CustomButton from "../../Components/CustomButton";
export const AddSafe = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        postal_code: '',
        safe_state: '',
        status: '',
        subscription_status: '',
        user_assosiation_date: '',
    });

    const status = [
        {
            code: 0,
            name: 'Inactive'
        },
        {
            code: 1,
            name: 'Active'
        }
    ]

    const SafeState = [
        {
            code: 0,
            name: 'Offline'
        },
        {
            code: 1,
            name: 'Online'
        }
    ]

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(formData)
    };

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const LogoutData = localStorage.getItem('login');
    const inActive = () => {
        setShowModal(false)
        setShowModal2(true)
    }
    const Active = () => {
        setShowModal3(false)
        setShowModal4(true)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        document.querySelector('.loaderBox').classList.remove("d-none");

        // Create a new FormData object
        const formDataMethod = new FormData();
        for (const key in formData) {
            formDataMethod.append(key, formData[key]);
        }

        console.log(formData)

        // Make the fetch request
        fetch(`https://custom.mystagingserver.site/parcel_safe_app/public/api/admin/safe-add-edit`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${LogoutData}`
            },
            body: formDataMethod // Use the FormData object as the request body
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(data);
            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(error)
            })
    };





    return (
        <>
            <DashboardLayout>
                <div className="dashCard mb-4">
                    <div className="row mb-3">
                        <div className="col-12 mb-2">
                            <h2 className="mainTitle">
                                <BackButton />
                                Add Safe
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <CustomInput
                                                    label='Safe Name'
                                                    required
                                                    id='name'
                                                    type='text'
                                                    placeholder='Enter Safe'
                                                    labelClass='mainLabel'
                                                    inputClass='mainInput'
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <CustomInput
                                                    label='Address'
                                                    required
                                                    id='address'
                                                    type='text'
                                                    placeholder='Enter Address'
                                                    labelClass='mainLabel'
                                                    inputClass='mainInput'
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <CustomInput
                                                    label='City'
                                                    required
                                                    id='city'
                                                    type='text'
                                                    placeholder='Enter City'
                                                    labelClass='mainLabel'
                                                    inputClass='mainInput'
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <CustomInput
                                                    label='Postal Code'
                                                    required
                                                    id='postalCode'
                                                    type='number'
                                                    placeholder='Enter Postal Code'
                                                    labelClass='mainLabel'
                                                    inputClass='mainInput'
                                                    name="postal_code"
                                                    value={formData.postal_code}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <CustomInput
                                                    label='State'
                                                    required
                                                    id='state'
                                                    type='number'
                                                    placeholder='Enter State'
                                                    labelClass='mainLabel'
                                                    inputClass='mainInput'
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <SelectBox
                                                    selectClass="mainInput"
                                                    name="subscription_status"
                                                    label="Status"
                                                    required
                                                    placeholder="Select Status"
                                                    value={formData.subscription_status}
                                                    option={status}
                                                    onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <SelectBox
                                                    selectClass="mainInput"
                                                    name="safe_state"
                                                    label="Safe State"
                                                    required
                                                    placeholder="Select Safe"
                                                    value={formData.safe_state}
                                                    option={SafeState}
                                                    onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <SelectBox
                                                    selectClass="mainInput"
                                                    name="status"
                                                    label="Status"
                                                    required
                                                    placeholder="Select Status"
                                                    value={formData.status}
                                                    option={status}
                                                    onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-md-12">
                                                <CustomButton variant='primaryButton' text='Update' type='submit' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
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

