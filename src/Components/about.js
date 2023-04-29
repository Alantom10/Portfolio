import React, { Component } from 'react';
import Me from './Images/Me.jpg';


class About extends Component {
    render(){
        return(
            <div>
                <div id='mobile-app-bar'>
                    <a className='otherpage-alif' style={{textDecoration:'none'}} href='/'>  Alif  </a>
                    <p className='current-page'>About Me</p>
                </div>
                <div id='id_card'>
                    <img id="beautiful_me" src={Me} alt='Me' /> 
                    <div id='about_div'>
                        <div id='about_inside_div'>
                            <p id='about1' className='about_text'> <b>tsworks</b> </p>
                            <p id='about2' className='about_text'> <b>Software Engineer</b> </p>
                            <p id='about3' className='about_text'>
                                I am a software engineer with a passion for creating innovative and efficient solutions to complex problems.
                                With experience in various industries, including web development, backend and quality assurance,
                                I am well-versed in developing and implementing cutting-edge technologies to drive growth and success
                                for any organization. Check out my resume and LinkedIn to learn more about me!
                            </p>
                        </div>
                    </div>
                </div>
                <div id='about-footer-space'></div>
            </div>
        )
    }
}

export default About;