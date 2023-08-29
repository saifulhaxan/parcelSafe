import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import { AuthLayout } from '../../Components/Layout/AuthLayout';
import CustomInput from "../../Components/CustomInput"
import CustomButton from '../../Components/CustomButton';
import CustomModal from '../../Components/CustomModal';

import "./style.css";

const ForgetPassword3 = () => {
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.title = 'Parcel Safe | Password Recovery';
    }, [])


    const handleClick = () => {
        setShowModal(true)
    }

    const redirectHome = () => {
        navigate('/dashboard')
    }

    return (
        <>
            <AuthLayout authTitle='Password Recovery' authPara='Enter a new password.' backOption={true}>
                <form>
                    <CustomInput label='New Password' required id='pass' type='password' placeholder='Enter New Password' labelClass='mainLabel' inputClass='mainInput' />
                    <CustomInput label='Confirm Password' required id='cPass' type='password' placeholder='Confirm Password' labelClass='mainLabel' inputClass='mainInput' />

                    <div className="mt-4 text-center">
                        <CustomButton type='button' variant='primaryButton' text='Update' onClick={handleClick} />
                    </div>
                </form>
            </AuthLayout>

            <CustomModal show={showModal} success heading='Password updated successfully. Please login to continue' close={redirectHome} btnTxt="Continue"/>
        </>
    )
}



export default ForgetPassword3





