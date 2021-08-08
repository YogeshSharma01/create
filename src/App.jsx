import React,{useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Booking from './Booking';
import Contact from './Contact';


const App = () =>{
    const [loader, setLoader] = useState(false);
    useEffect(()=>{
        setLoader(true);
        setTimeout(()=>{
            setLoader(false);
        },3000);
      },[])
    
    return (
        <>
            {
                loader?
               <img className="loader" src="/images/RAFTAR-LOGO-1.gif" alt="loader"/> : 
         <span>   
        <Navbar className="back-G"/>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/menu" component={Menu}></Route>
        <Route exact path="/booking" component={Booking}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        {/* <ParticleBackground /> */}
        </Switch>
        </span>
            }
           
        
        
        </>
    )
}

export default App;