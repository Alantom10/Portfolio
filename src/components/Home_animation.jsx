import React, { Component, useEffect } from 'react';
import welcome_gif from "./image/Alan.gif"

export default function Home_animation()  {
    const state = {  } 
    const styles={
        background: 'black',
        height: '100vh',
    }
    
    return (
        <div id="home_container">
                <div className='background-video' id="animation">
                    <img id='my_pic' src={welcome_gif} alt='Logo'/>
                </div>
                {/*<div id="welcome_gif_container">*/}
                {/*    <img id="welcome_gif" src={welcome_gif}/>*/}
                {/*</div>*/}
                <div id="trait_container">
                    <p id='intro' class="traits">Hi, I am Alan Thomas!</p>
                    <p id='curious' class="traits">Curious</p>
                    <p id='adventurous' class="traits">Adventurous</p>
                    <p id='ambitious' class="traits">Ambitious</p>
                    <p id='resilient' class="traits">Resilient</p>
                </div>

        </div>
    );
    
}
 