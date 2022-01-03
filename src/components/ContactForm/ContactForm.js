import React, { useState } from 'react';
import Contact from '../Contact/Contact';
import FormSuccess from '../FormSuccess/FormSuccess';

const ContactForm = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <div>
            {!isSubmitted ?  <Contact submitForm={submitForm} /> : <FormSuccess />}
        </div>
    )
}

export default ContactForm


