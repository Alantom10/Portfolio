import React, {Component} from 'react';
import Me from './Images/Me.jpg';
import Link from '@material-ui/core/Link';

class contacts extends Component{

    phone()     {document.getElementById('actual_contact').innerHTML = '604-716-2314';}
    github()    {document.getElementById('actual_contact').innerHTML = "<a href='https://github.com/Alantom10'>Alantom10</a>";}
    email()     {document.getElementById('actual_contact').innerHTML = 'acthomas2000@gmail.com';}
    linkedin()  {document.getElementById('actual_contact').innerHTML = "<a href='https://www.linkedin.com/in/alanthomas2000/'>Alan Thomas</a>";}
    skype()     {document.getElementById('actual_contact').innerHTML = "acthomas2000@gmail.com";}

    render(){
        return(
            <div>
                <div id='mobile-app-bar'>
                    <a className='otherpage-alif' style={{textDecoration:'none'}} href='/'>  Alif  </a>
                    <p className='current-page'>Contacts</p>
                </div>
            
                <div id='contact_card'>
                    <img id="beautiful_me" src={Me} alt='Me' />
                    <div id='about_div'>
                        <div id='about_inside_div'></div>
                            <div className='about_text'>
                                <p id='about1' className='about_text'> Alan Thomas </p>
                                <p id='about2' className='about_text'> Software Engineer at TSWorks </p>
                            </div>
                            <div id='contact-div'>
                                <Link href='https://github.com/Alantom10' target="_blank" rel="noopener noreferrer" onClick={this.github}><div className='contact_icons' onClick={this.github}></div></Link>
                                <Link href='tel:604-716-2314'> <div id='phone_icon' className='contact_icons' onClick={this.phone}></div> </Link>
                                <Link href='mailto:acthomas2000@gmail.com?subject=From Portfolio'> <div id='email_icon' className='contact_icons' onClick={this.email}></div> </Link>
                                <Link href='https://www.linkedin.com/in/alanthomas2000/' target="_blank" rel="noopener noreferrer"> <div id='linkedin_icon' className='contact_icons' onClick={this.linkedin}></div> </Link>
                                <Link href='skype:acthomas2000@hotmail.com?chat'> <div id='skype_icon' className='contact_icons' onClick={this.skype}></div> </Link>
                            </div>
                            <div id='actual_contact'>
                                Click any icon to connect with me
                            </div>
                        </div>
                    </div>
                    <div id='about-footer-space'></div>
                </div>
        )
    }
}

export default contacts;