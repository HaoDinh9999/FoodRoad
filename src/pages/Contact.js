import React from 'react';
import '../App.css';
import Footer from '../components/footer/Footer';
import ContactDetails from '../components/contactdetails/ContactDetails';

function Contact() {
    return(
        <>
        <div id='main'>
            <div className='contact-img'>
                <img src='https://www.saigonfoodtour.com/foodtour2017/img/about.png' alt='contact us' className='contact-img' />
                <div className='contact-center'>
                    <h1>Contact us</h1>
                    <h4>We'd love to hear from you</h4>
                </div>
            </div>
        </div>
        <div id='contact'>
            <ContactDetails />
        </div>
        <Footer />
        </>
    );
}

export default Contact;