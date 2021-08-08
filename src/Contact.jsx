import React from 'react';
import './Contact.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';



const Contact = () =>{
    return (
        <>

        <section className="conatct-page">
          
        
        <h1 className="h1-contact" style={{position:"absolute"}} >
            <span className="raf">R</span>
            <span className="raf">a</span>
            <span className="raf">f</span>
            <span className="raf">t</span>
            <span className="raf">a</span>
            <span className="raf">a</span>
            <span className="raf">r</span>
            <span className="raf">B</span>
            <span className="raf">&</span>
            <span className="raf">L</span>
            <img className="rotate" style={{marginLeft:"2vh"}}  src="/images/raftaar-bar-sign.jpeg" alt="log"/>
            </h1>
            
        <div id="body">
        <div id="wrap">
        <div id="form-warm">
        <form id="form">
        <h1 id="address"> 
        <img style={{height:"8vh", width:"10vh",marginLeft:"3vh"}} src="./images/raftaar-logo-png.png" alt="raftar-logo"></img>
        <a className="social_link-2"   href="https://www.instagram.com/raftaarlounge/" target="_blank" rel="noopener noreferrer" > <InstagramIcon/></a> 
        <a className="social_link-2"   href="https://www.facebook.com/Raftaarloungeindia" target="_blank" rel="noopener noreferrer"><FacebookIcon style={{marginLeft:"1vh"}} /></a>   
        <a className="social_link-2"   href="https://twitter.com/raftaarmusic/status/748761491885559808" target="_blank" rel="noopener noreferrer" ><TwitterIcon style={{marginLeft:"1vh"}}  /></a>
        <br/>
        15C, Club, Road, Punjabi Bag <br/>New Delhi <br/>
        Phone : 123-456-789 <br/>Fax: 098-765-4321<br/>
        
        </h1> 
        </form>
        </div>
        </div>
        </div>
        <div  style={{marginLeft:"20%"}}  >
                <img id="contact-image" style={{width:"100%"}}  src="/images/about-12.jpeg" alt="reel"></img>  
        </div>
        </section>
        
        



        </>
    )
}

export default Contact;