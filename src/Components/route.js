import React from 'react';
import Homepage from './home';
import About from './about';
import Resume from './resume';
import Skills from './skills';
import Projects  from './projects';
import Contacts from './contacts';
import { Routes, Route } from 'react-router-dom';


const Router = () => (
    <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About /> } />
        <Route path="/resume" element={<Resume /> } />
        <Route path="/skills" element={<Skills /> } />
        <Route path="/projects" element={<Projects /> } />
        <Route path="/contacts" element={<Contacts /> } />
    </Routes>
)

export default Router;