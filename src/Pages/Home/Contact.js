import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from './../Shared/PrimaryButton';
const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center mb-10'>
            <div className='my-28 text-center'>
                <div className='text-center mb-16'>
                    <h3 className='text-primary text-xl font-bold uppercase'>Contact Us</h3>
                    <h2 className='text-4xl text-white'>Stay connected with us</h2>
                </div>
            
            <input type="text" placeholder="Email Address" class="input w-full max-w-xs my-2" />
            <input type="text" placeholder="Subject" class="input w-full max-w-xs my-2" />
            <textarea type="textarea" placeholder="Your message" class="textarea textarea-bordered w-full max-w-xs my-2"></textarea>
            <PrimaryButton>Submit</PrimaryButton>
        </div>
        </section>
    );
};

export default Contact;