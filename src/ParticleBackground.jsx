import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './Config/ParticleConfig';


const  ParticleBackground = () =>{
    return (
        <>
            <Particles params={particlesConfig}></Particles>
        </>
    )
}

export default ParticleBackground;
