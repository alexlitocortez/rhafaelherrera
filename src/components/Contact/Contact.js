import React, { useState, useEffect } from 'react';
import useForm from '../../useForm/useForm';
import './Contact.css';
import validateInfo from '/Users/l/rhafaelherrera/src/components/validateInfo/validateInfo.js';

function Contact({submitForm}) {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo)

    return (
        <div>
            <section id='contact'>
            <div className='contact-container-background'>
                <div className='contact-container'>
                    <div>
                        <h1 className='contact-header'>
                            Contact Me
                        </h1>
                    </div>
                    <div className='input-section' id='input-section' onSubmit={handleSubmit}>
                            <div className='input-container'>
                                <input 
                                    className='app-form-control' 
                                    type='text' name='name' 
                                    id='name' placeholder='Name' 
                                    value={values.name} 
                                    onChange={handleChange} />
                                {errors.name && <p>{errors.name}</p>}
                            </div>
                            <div className='input-container'>
                                <input 
                                    className='app-form-control' 
                                    type='text' 
                                    name='email' 
                                    id='email' 
                                    placeholder='Email' 
                                    value={values.email}
                                    onChange={handleChange}
                                    />
                                {errors.email && <p>{errors.email}</p>}
                            </div>
                            <div className='input-container'>
                                <textarea 
                                    className='app-form-control' 
                                    type='submit' 
                                    name='message' 
                                    id='message' 
                                    placeholder='Message'
                                    value={values.message}
                                    onChange={handleChange} 
                                    />
                                {errors.message && <p>{errors.message}</p>}
                            </div>
                    </div>
                </div>
                <div className='button-container-half'>
                    <div>
                    </div>
                    <div className='button-container'>
                        <button className='contact-button' type='submit' onClick={handleSubmit}>
                            Send  →
                        </button>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Contact
