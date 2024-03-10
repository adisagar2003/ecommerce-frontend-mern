import React from 'react'
import DeliveryMan from "../../assets/images/deliveryman.png";
import ContactBackground from "../../assets/images/contact.png";
import { FaRegPaperPlane } from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section className='contact-section'>
        <div className='wrapper'>
            <div className='contact'>
                
                <div className='contact-main'>
          
                    <h3>
                        Stay home & get your daily<br />
                        needs from our shop
                    </h3>
                    <span>Start Your Daily Shopping with <span className='green'>Nest Mart</span></span>
                    <div className='contact-input-container'>
                        <FaRegPaperPlane  className='send-message-icon'/>
                        <input placeholder='Your email address' />
                        <button className='contact-button'>Subscribe</button>
                    </div>
                </div>
                <div className='contact-image'>
                <img src={DeliveryMan} className='delivery-guy'/>
                </div>
            </div>
           
        </div>
    </section>
  )
}

export default Contact