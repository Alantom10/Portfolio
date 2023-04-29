import React, { Component } from 'react';
import './css/about_me.css';
import './css/contacts.css';
import profile_pic from './image/profile_pic.jpg';
import Link from '@material-ui/core/Link';

export default class Contacts extends Component  {
    // state = {  } 
    // render() { 
    phone(){document.getElementById('actual_contact').innerHTML = '778-837-6114';}
    github(){document.getElementById('actual_contact').innerHTML = "<a href='https://github.com/aanika23'>aanika23</a>";}
    email(){document.getElementById('actual_contact').innerHTML = 'anikaantara95@gmail.com';}
    linkedin(){document.getElementById('actual_contact').innerHTML = "<a href='https://www.linkedin.com/in/anika-sheikh-5723201b8/'>Anika Sheikh</a>";}

    render(){
        return (
            <div>
                <div id="id_card">
                    <img id="image_holder" src={profile_pic}></img>
                    <div id="about_outside_div">
                        <div id="about_me_container">
                            <div id="about_me_text_container">
                                <p id="header_main" className='about_text'>Anika Sheikh</p>
                                <p id="header_sub" className='about_text'>Software Engineer at Avestec Technologies</p>
                            </div>
                            <div id='contact-div'>
                                <Link href='https://github.com/aanika23' target="_blank" rel="noopener noreferrer" onClick={this.github}><div className='contact_icons' onClick={this.github}></div></Link>
                                <Link href='tel:778-837-6114'> <div id='phone_icon' className='contact_icons' onClick={this.phone}></div> </Link>
                                <Link href='mailto:anikaantara95@gmail.com?subject=From Portfolio'> <div id='email_icon' className='contact_icons' onClick={this.email}></div> </Link>
                                <Link href='https://www.linkedin.com/in/anika-sheikh-5723201b8/' target="_blank" rel="noopener noreferrer"> <div id='linkedin_icon' className='contact_icons' onClick={this.linkedin}></div> </Link>
                            </div>
                            <div id='actual_contact'>
                                Click any icon to connect with me
                            </div>
    
                        </div>
                    </div>
                </div>
                 <div id='about-footer-space'></div>
            </div>
        );

    }   
    
    // }
}