import React from 'react';
import './Mailer.css';
import emailJS from 'emailjs-com';
const Mailer = () =>{
    const sendEmail = (e) =>{
        e.preventDefault();
        emailJS.sendForm('service_6ekqafn','template_46r2r4w', e.target, 'user_aB05ZMutS2MzWJf7LYoX5').then(res=>{
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
        <>
        <h1>Book Your Seat</h1>
        <form onSubmit={sendEmail}>
            <label>Name</label>
            <input className="no-outline"  name="name" type="text" required />

            <label>Email</label>
            <input  className="no-outline" name="user_email" type="email" required />

            <label>Number of People</label>
            <input  className="no-outline" name="number_of_people" type="number" required />
            <span style={{display:"flex"}}>
            <label>Date</label>
            <input style={{ filter:"brightness(0) invert(1)"}}  type="date" name="booking_date" required/>

            <label>Time</label>
            <input type="text"  name="booking_time" required />
            </span>

            <input style={{marginTop:"2vh", width:"13vh"}} className="discover" type="submit" value="Submit" />

        </form>
        </>
    )
}

export default Mailer;