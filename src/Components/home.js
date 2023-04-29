import React, { Component } from 'react';
import MyLogo from './Images/node.png';

class homepage extends Component {
    render(){
        return (
            <div id='homepage'>
                <div id='mobile-app-bar'>
                    <a style={{textDecoration:'none'}} href='/'> <p href='/' id='homepage-alan'> Alan </p> </a>
                </div>
                <div className='background-video' id="animation">
                    <img id='my_pic' src={MyLogo} alt='Logo'/>
                </div>
                <div id='some_text'>
                    <p id='intro' className='traits'> Hi I'm Alan </p>
                    {/*<p id='coder' className='traits'> DevOps Enthusiast </p>*/}
                    {/*<p id='player' className="traits"> Non-Nobel Prize Winner </p>*/}
                    {/*<p id='genius' className="traits"> Secret Genius ... Nobody can tell </p>*/}
                    {/*<p id='hide' className="traits"> Entertainer - Will Chan (My Boss) </p>*/}
                </div>
            </div>
        )
    }
}

export default homepage;