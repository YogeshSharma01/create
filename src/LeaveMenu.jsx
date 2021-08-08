import React,{useState} from 'react';
import './MenuStyles.css';

const Leaves = ()=>{
    const [show, setShow] = useState(false);
    // const [hide, setHide ] = useState(true);
    return (
        <>
            <section>
            <span style={{display:"flex",marginTop:"14vh"}}>
            <div className="Menu_content"><h4 className="Test">Discover Your Test</h4><br/>
            <h1 className="MenuH">Enjoy Our <br/> Delicious Meal</h1>
            <h4>The Raftaar Lounge Is A Neighborhood Resturant Serving<br/>Seasonal Global Cuisine Driven By The Faire</h4>
            </div>
            <div className="Burger1"><img style={{borderRadius: "70vh", height:"80%"}} src="/images/Raftaar_burger.jpeg" alt="burger"/></div>
            </span>
            <img className="side-food-menu" style={{float:"right", borderRadius: "50% 0% 0% 50%"}} src="/images/Raftaar-side-1.jpeg" alt="right-flower"/>
            <span className="menu-explore">
            <h4 style={{textAlign: "center"}} className="Test">Explore</h4>
            <h1 style={{textAlign: "center"}}>Our Delicious Menu</h1>
            <span className="circle" style={{}}>
            <span className="h5"><h5 className="circle-text" style={{textAlign: "center"}}>Breakfast</h5></span>
            <hr class="new4"/>
            <span className="h5"> <h5 className="circle-text" style={{textAlign: "center"}}>Lunch</h5></span>
            <hr class="new4"/>
            <span className="h5"><h5 className="circle-text" style={{textAlign: "center"}}>Dinner</h5></span>
            <hr class="new4"/>
            <span className="h5"><h5 className="circle-text" style={{textAlign: "center"}}>Desserts</h5></span>
            </span>
            </span>
            <img className="side-food-menu" style={{ borderRadius: "0% 50% 50% 0%"}} src="/images/Raftar-side-2.jpeg" alt="left-flower"/>
            
            <button onClick={()=>{setShow(true)}}  style={{width:"18vh",marginLeft:"1%", marginRight:"1%"}} className="discover">View Full Menu</button>
            
            {
                show? <iframe src="https://drive.google.com/file/d/1UghiEGLc-ptvrin4xdV2O93hJkXZtc65/preview" title="myFrame" height="414" allow="autoplay"></iframe> : null

            }
            {
                show? <button onClick={()=>{setShow(false)}}  style={{width:"18vh",marginLeft:"1%"}} className="discover">Hide Menu</button> :null
            }
            
                <div className="set">
                <div><img src="/images/leaves1.png" alt="leave_img" /></div>
                <div><img src="/images/leaves2.png" alt="leave_img" /></div>
                <div><img src="/images/leaves3.png" alt="leave_img" /></div>
                <div><img src="/images/leaves4.png" alt="leave_img" /></div>
                <div><img src="/images/leaves1.png" alt="leave_img" /></div>
                <div><img src="/images/leaves2.png" alt="leave_img" /></div>
                <div><img src="/images/leaves3.png" alt="leave_img" /></div>
                <div><img src="/images/leaves4.png" alt="leave_img" /></div>
                </div>
                <div className="set set2">
                <div><img src="/images/leaves1.png" alt="leave_img" /></div>
                <div><img src="/images/leaves2.png" alt="leave_img" /></div>
                <div><img src="/images/leaves3.png" alt="leave_img" /></div>
                <div><img src="/images/leaves4.png" alt="leave_img" /></div>
                <div><img src="/images/leaves1.png" alt="leave_img" /></div>
                <div><img src="/images/leaves2.png" alt="leave_img" /></div>
                <div><img src="/images/leaves3.png" alt="leave_img" /></div>
                <div><img src="/images/leaves4.png" alt="leave_img" /></div>
                </div>
                <div className="set set3">
                <div><img src="/images/leaves1.png" alt="leave_img" /></div>
                <div><img src="/images/leaves2.png" alt="leave_img" /></div>
                <div><img src="/images/leaves3.png" alt="leave_img" /></div>
                <div><img src="/images/leaves4.png" alt="leave_img" /></div>
                <div><img src="/images/leaves1.png" alt="leave_img" /></div>
                <div><img src="/images/leaves2.png" alt="leave_img" /></div>
                <div><img src="/images/leaves3.png" alt="leave_img" /></div>
                <div><img src="/images/leaves4.png" alt="leave_img" /></div>
                </div>
            </section>
        </>
    );
}

export default Leaves;