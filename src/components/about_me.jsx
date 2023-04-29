import React, { Component } from 'react';
import './css/about_me.css';
import profile_pic from './image/profile_pic.jpg';

export default function AboutMe()  {
    // state = {  } 
    // render() { 

        return (
        <div>
            <div id="id_card">
                <img id="image_holder" src={profile_pic}></img>
                <div id="about_outside_div">
                    <div id="about_me_container">
                        <div id="about_me_text_container">
                            <p id="header_main" class='about_text'>Avestec Technologies</p>
                            <p id="header_sub" class='about_text'>Software Engineer</p>
                            <p id="main_body" class='about_text'>I am a software engineer with a passion for creating innovative and efficient solutions to complex problems. 
                            With experience in various industries, including drone technology, web development, and ship engineering,
                             I am well-versed in developing and implementing cutting-edge technologies to drive growth and success for any organization. 
                             Check out my resume and LinedIn to learn more about me!</p>
                        </div>

                    </div>
                </div>
            </div>
             <div id='about-footer-space'></div>
        </div>
        );
    // }
}