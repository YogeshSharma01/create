import React from 'react';
import BookingP from './BookingP';
import "./Booking.css";
import Mailer from './Component/Mailer';


const Booking = () =>{
    return (
        <>
        <div style={{display:"flex"}}>
        <div className="container">
            <div className="avatar" style={{position:"absolute"}}>
            <img style={{ borderRadius:" 20% 20% 100vh 100vh"}} src="/images/Raftaar_burger_2.jpeg" alt="boking"></img>
            </div>
        </div>
        <div style={{}} className="container2">
            <h1 style={{fontSize:"5vh"}} className="Number">Reservation</h1><br/>
            
            <Mailer/>

        </div>
        </div>
       <span id="bookingP"> <BookingP/> </span>
        </>
    )
}

export default Booking;