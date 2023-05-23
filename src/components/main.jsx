import React, { Component } from 'react';
import Navbar from './navbar';
import Home_animation from './Home_animation';
import AboutMe from './about_me';
import Resume from './resume';
import Skills from './skills';
import Projects from './projects';
import Contacts from './contacts';
import './css/home.css';
import "@fontsource/amatic-sc";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default class Main extends Component {
    state = {  } 
    render() { 
        return (
            <BrowserRouter>
                <div id="container">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home_animation/>}/>
                        <Route path="/about_me" element={<AboutMe/>} />
                        <Route path="/resume" element={<Resume/>} />
                        <Route path="/skills" element={<Skills/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/contacts" element={<Contacts/>} />
                    </Routes>
                </div>
            </BrowserRouter>
           
        );
    }
}
 