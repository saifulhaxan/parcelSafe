
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

import { authImage, logo } from "../../../Assets/images";
import "./style.css";

export const AuthLayout = (props) => {
    return (
        <>
            <section className="authBg">
                <div className='container'>
                    <div className="row g-0 authBox">
                        <div className="col-lg-6">
                            <div className="authFormWrapper">
                                <div className="authForm">
                                    <div className="w-100 siteLogo text-center">
                                        {
                                            logo ?
                                                <img src={logo} alt="authLogo" />
                                                :
                                                <h1>Parcel <span>Safe</span></h1>
                                        }

                                    </div>
                                    <div className="authFormHeader">
                                        <h2 className="authTitle text-black">{props?.authTitle}</h2>
                                        <p className={props.subauthPara != '' ? 'authPara mb-0' : 'authPara'}>{props?.authPara}</p>
                                        <p className="authPara">{props?.subauthPara}</p>
                                    </div>
                                    {props?.children}
                                    {props?.backOption &&
                                        <div className="text-center mt-4">
                                            <Link to={'/login'} className='grayColor text-decoration-none fw-bold'><FontAwesomeIcon icon={faLeftLong} className='primaryColor me-2' />Back To <span class="text-theme-primary"> Login</span> </Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className='authImage'>
                                <img src={authImage} alt="authImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
