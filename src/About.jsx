import React,{useState} from 'react';
import "./styles.css";
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;



const About = () =>{
    let curTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState();
    const UpdateTime = () =>{
        curTime = new Date().toLocaleTimeString();
        setTime(curTime);
    }
    setInterval(UpdateTime, 1000);
    return (
        <>

        <h1 id="Event" style={{marginLeft:"5%"}}>Events And Functions</h1>
        <div className="bodyAbout">
       
        <div className="box">
            <span style={{"--i":1}} ><img src="/images/about-1.jpeg" alt="reel"/></span>
            <span style={{"--i":2}} ><img src="/images/about-2.jpeg" alt="reel"/></span>
            <span style={{"--i":3}} ><img src="/images/about-3.jpeg" alt="reel"/></span>
            <span style={{"--i":4}} ><img src="/images/about-4.jpeg" alt="reel"/></span>
            <span style={{"--i":5}} ><img src="/images/about-5.jpeg" alt="reel"/></span>
            <span style={{"--i":6}} ><img src="/images/about-6.jpeg" alt="reel"/></span>
            <span style={{"--i":7}} ><img src="/images/about-7.jpeg" alt="reel"/></span>
            <span style={{"--i":8}} ><img src="/images/about-8.jpeg" alt="reel"/></span>
        </div>
        <h1 className="about-heading" style={{position:"absolute"}}><span className="Number">01</span><br/>Talk Of The Town On <br/>Celebrity Night</h1>
        <div style={{position:"absolute", marginLeft: "40%"}} class="vl"></div>
        <span className="date-about" style={{position:"absolute", writingMode: "vertical-rl", fontSize:"5vh",marginLeft: "43%",marginTop: "50vh" }}>{date}/{month}  </span>
        </div>
        <div>
        <h5 className="h5-about" style={{marginLeft:"5%"}}>
        {time}  <br/>
        15C, Club Road, Punjabi Bagh <br/>
        New Delhi
        </h5>
        </div>
        <div className="aboutFooter">
        <h1 className="about-bottom" style={{position:"absolute"}}><span className="Number" style={{backgroundClip:"text"}}>17</span><br/>Parties Last<br/>Month</h1>
        <h1 className="about-bottom-2" style={{position:"absolute"}}><span className="Number">850</span><br/>Visitors Last<br/>Month</h1>
        <h1 className="about-bottom-3" style={{position:"absolute"}}><span className="Number">457</span><br/>Hours Of Music<br/>Was Played</h1>
        <img style={{width:"100%"}} src="/images/Raftaar-party.jpeg" alt="reel"/>

        </div>
        </>
    )
}

export default About;