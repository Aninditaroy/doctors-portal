import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an appointment today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus sapiente reprehenderit dolore architecto enim sequi omnis totam maxime nesciunt! Doloremque illo perferendis et est rerum ullam odio ad, voluptates, dolor eligendi consequuntur deleniti itaque ratione, suscipit sequi consectetur laborum?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;