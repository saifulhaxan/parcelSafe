import { React, useState } from 'react';
import CustomButton from '../CustomButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";


import './style.css'

const NotificationCard = (props) => {

    const [notiRead, setNotiRead] = useState(props.read)

    return (
        <div className={`notificationWrapper ${notiRead ? 'unread' : ''}`}>
            <div className={`d-sm-flex justify-content-between align-items-center gap-3 `} key={props.id}>
                <div className="d-flex gap-3">
                    <div className="notificationImageIcon">
                        <img src={props?.image} alt="Icon" />
                    </div>
                    <div className="flex-grow-1">
                        <p className="notificationText">{props?.text}</p>
                        <div className="dateTime">
                            <p className="p-sm l-grey-text mb-0"> <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> {props?.time}</p>
                            <span className='mx-2'>|</span>
                            <p className="p-sm l-grey-text mb-0"><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> {props?.date}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 text-end">
                    <CustomButton onClick={() => setNotiRead(!notiRead)} variant={notiRead ? 'secondaryButton' : 'primaryButton'} className="customButton2" text={notiRead ? "Mark as Read" : "Mark as Unread"} />
                </div>
            </div>
        </div>

    )
}

export default NotificationCard
