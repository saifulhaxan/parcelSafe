import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import "./style.css";


import { AuthLayout } from '../../Components/Layout/AuthLayout';
import CustomInput from "../../Components/CustomInput"
import CustomButton from '../../Components/CustomButton';


const ForgetPassword2 = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({})

    useEffect(() => {
        document.title = 'Parcel Safe | Password Recovery';
    }, [])


    const handleClick = (e) => {
        e.preventDefault()
        navigate('/forget-password3')
    }

    return (
        <>
            <AuthLayout authTitle='Verification Code' authPara='Please Check Your Email For Verification Code.' subauthPara='Your Cod is 4 digit in Length' backOption={true}>
                <form>
                    <div class="inputWrapper"><label for="verificationCode" class="mainLabel">Verification Code<span>*</span></label></div>
                    <div className='verification-box justify-content-between'>
                        <CustomInput required id='verificationCode' type='number' labelClass='mainLabel' inputClass='mainInput text-center' onChange={(event) => {
                            setFormData({ ...formData, code: event.target.value })
                        }} />
                        <CustomInput required id='verificationCode' type='number' labelClass='mainLabel' inputClass='mainInput text-center' onChange={(event) => {
                            setFormData({ ...formData, code: event.target.value })
                        }} />
                        <CustomInput required id='verificationCode' type='number' labelClass='mainLabel' inputClass='mainInput text-center' onChange={(event) => {
                            setFormData({ ...formData, code: event.target.value })
                        }} />
                        <CustomInput required id='verificationCode' type='number' labelClass='mainLabel' inputClass='mainInput text-center' onChange={(event) => {
                            setFormData({ ...formData, code: event.target.value })
                        }} />
                    </div>
                    <div className="d-flex align-items-baseline justify-content-between mt-1">
                        <p className='text-danger fw-bold'>Resending in 00:50</p>
                        <button type='button' className='notButton primaryColor fw-bold text-decoration-underline'>Resend Code</button>
                    </div>
                    <div className="mt-4 text-center">
                        <CustomButton type='button' variant='primaryButton' text='Continue' onClick={handleClick} />
                    </div>
                </form>
            </AuthLayout>
        </>
    )
}



export default ForgetPassword2