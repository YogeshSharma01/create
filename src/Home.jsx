import React from 'react';
import ParticleBackground from './ParticleBackground';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "./index.css";
const Home = () =>{
    return (
        <>
          <span className="main-home" >
              <div className="home-content">
                <h3>EAT SLEEP <span className="rave"> RAVE </span> REPEAT</h3><img className="mediaquery-image"  src="/images/rafter-2.jpeg" alt="ok"></img>
                <h1 className="Raftaar-name-2">Raftaar Bar And <br/> Lounges</h1>
                <h3 className="discription-home">A Multi Level Lounge, Each With Different Experience Of it's <br/> Own The Ultimate Party Destination For One And All!</h3>
                
                <div> 
                <a className="social_link"   href="https://www.instagram.com/raftaarlounge/"  target="_blank" rel="noopener noreferrer" > <InstagramIcon  /></a> 
                <a className="social_link"   href="https://www.facebook.com/Raftaarloungeindia"  target="_blank" rel="noopener noreferrer" ><FacebookIcon style={{marginLeft:"1vh"}} /></a>   
                <a className="social_link"   href="https://twitter.com/raftaarmusic/status/748761491885559808"  target="_blank" rel="noopener noreferrer" ><TwitterIcon style={{marginLeft:"1vh"}}  /></a>    </div>
              <a href="https://www.google.com/search?q=raftaar+bar+and+lounge&rlz=1C5CHFA_enIN859IN859&oq=Raftaar+&aqs=chrome.2.69i57j69i59l3j46i131i175i199i433i512j69i60l3.7291j0j7&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">  <button style={{marginTop: "1vh"}} className="discover">Discover More <ArrowForwardIcon className="aro"/> </button></a>
              </div>
              <span className="home-content-2">
                  <img  src="/images/rafter-2.jpeg" alt="ok"></img>
              </span>
          </span>  
          <ParticleBackground/>
        </>
    )
}

export default Home;