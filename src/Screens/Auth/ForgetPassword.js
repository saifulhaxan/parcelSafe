import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import "./style.css";


import { AuthLayout } from '../../Components/Layout/AuthLayout';
import CustomInput from "../../Components/CustomInput"
import CustomButton from '../../Components/CustomButton';


const ForgetPassword = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({})

    useEffect(() => {
        document.title = 'Parcel Safe | Password Recovery';
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/forget-password2')
    }

    return (
        <>
            <AuthLayout authTitle='Password Recovery' authPara='Enter your email address to receive a verification code.' backOption={true}>
                <form>
                    <CustomInput label='Email Address' required id='userEmail' type='email' placeholder='Enter Your Email Address' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                        setFormData({ ...formData, email: event.target.value })
                    }} />
                    <div className="mt-4 text-center">
                        <CustomButton type='button' variant='primaryButton' text='Continue' onClick={handleClick} />
                    </div>
                </form>

            </AuthLayout>
        </>
    )
}



export default ForgetPassword
