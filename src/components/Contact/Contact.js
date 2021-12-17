import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div>
            <div className='contact-container'>
                <div>
                    <h1 className='contact-header'>
                        Contact Me
                    </h1>
                </div>
                <div className='input-section'>
                    <input className='app-form-control' type='text' name='name' id='name' placeholder='Name' />
                    <input className='app-form-control' type='text' name='email' id='email' placeholder='Email' />
                    <textarea className='app-form-control' type='submit' name='message' id='message' placeholder='Message' />
                </div>
            </div>
        </div>
    )
}

export default Contact
