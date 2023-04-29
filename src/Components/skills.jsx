import React, { Component } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import './css/skills.css';
import './css/resume.css';

export default class Skills extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active_tab:"1",//Resume
        };
    }

    chipStyle = { 
        bgcolor: 'rgba(0,0,0,0.7)',
        color: 'white',
        fontSize: '2vh' 
    }  
    

    handleChange = (event, newValue) => {
        this.setState({active_tab: newValue});
        let dev = document.getElementsByClassName("dev-chip");
        let framework = document.getElementsByClassName("framework-chip");
        let general =document.getElementsByClassName("general-chip");
        if(newValue == '1'){

            for (let i=0; i<dev.length; i++)  {dev[i].style.animation = 'fade-in 1s linear forwards'};
            for (let i=0; i<framework.length; i++)  {framework[i].style.animation = 'fade-in 1s linear forwards'};
            for (let i=0; i<general.length; i++)  {general[i].style.animation = 'fade-in 1s linear forwards'};
        } else if(newValue == '2'){

            for (let i=0; i<dev.length; i++)  {dev[i].style.animation = 'fade-in 1s linear forwards'};
            for (let i=0; i<framework.length; i++)  {framework[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<general.length; i++)  {general[i].style.animation = 'fade-out 1s linear forwards'};
        } else if(newValue == '3'){

            for (let i=0; i<dev.length; i++)  {dev[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<framework.length; i++)  {framework[i].style.animation = 'fade-in 1s linear forwards'};
            for (let i=0; i<general.length; i++)  {general[i].style.animation = 'fade-out 1s linear forwards'};
        } else if(newValue == '4'){

            for (let i=0; i<dev.length; i++)  {dev[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<framework.length; i++)  {framework[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<general.length; i++)  {general[i].style.animation = 'fade-in 1s linear forwards'};
        }
    }

    allSkills(){
        return (
            
                <div id='skills'>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/C.png"/>} label="C&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/JavaScript.png"/>} label="JavaScript&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/Agile.jpg"/>} label="Agile Development Method&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/C++.png"/>} label="C++&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/Confluence.png"/>} label="Confluence&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/CSS.jpg"/>} label="CSS&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/Git.jpg"/>} label="Git&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/GitLab.jpg"/>} label="GitLab&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/HTML.png"/>} label="HTML&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/Java.jpg"/>} label="Java&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/Jira.jpg"/>} label="Jira&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/Office.jpg"/>} label="Microsoft Word / Powerpoint / Excel&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/PowerBI.png"/>} label="Power BI&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/Python.png"/>} label="Python&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/R.jpg"/>} label="R Studio&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='framework-chip' avatar={<Avatar src="/skills/React.png"/>} label="React&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/SQL.png"/>} label="PostgreSQL&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/SQLite.png"/>} label="SQLite&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/SQLServer.jpg"/>} label="SQL Server Management Studio&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/SSH.png"/>} label="Secure Shell&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/Stats.jpg"/>} label="Statistical Analysis&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/VHDL.png"/>} label="VHDL&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/Vim.png"/>} label="Vim&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/VirtualBox.png"/>} label="Virtual Box&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/VisualStudio.png"/>} label="Visual Studio Code&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/vmware.png"/>} label="vmware&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/OS.jpg"/>} label="Windows / Linux&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='framework-chip' avatar={<Avatar src="/skills/flutter.png"/>} label="Flutter&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/matlab.png"/>} label="Matlab&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/vba.png"/>} label="VBA Excel&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/firebase.png"/>} label="Firebase&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='framework-chip' avatar={<Avatar src="/skills/bootstrap.png"/>} label="Bootstrap&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='framework-chip' avatar={<Avatar src="/skills/nodejs.png"/>} label="Node.js&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='framework-chip' avatar={<Avatar src="/skills/django.png"/>} label="Django&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/unitTest.png"/>} label="Unit Testing&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/unitTest.png"/>} label="UI Testing&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='general-chip' avatar={<Avatar src="/skills/beaglebone.png"/>} label="BeagleBone Green&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='dev-chip' avatar={<Avatar src="/skills/dart.png"/>} label="Dart&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='framework-chip' avatar={<Avatar src="/skills/pandas.png"/>} label="Pandas&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                    <Chip className='framework-chip' avatar={<Avatar src="/skills/matlab.png"/>} label="Matplotlib&nbsp;&nbsp;&nbsp;" sx={this.chipStyle}/>
                </div>
        )
    }

    render(){
        return(
            <div className='resume-tab'>
                <TabContext value={this.state.active_tab}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={this.handleChange} centered>
                            <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>ALL</span>} value='1' />
                            <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>DEVELOPMENT</span>} value='2' />
                            <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>FRAMEWORK</span>} value='3' />
                            <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>GENERAL</span>} value='4' />
                        </TabList>
                    </Box>
                    <div id='skills_container'>{this.allSkills()}</div>

                </TabContext>
            </div>
        )
    }
    
}