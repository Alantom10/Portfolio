import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Box from '@mui/material/Box';

import './css/resume.css'
import './css/projects.css'
export default class Projects extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active_tab:"1",//Resume
        };
    }

    handleChange = (event, newValue) => {
        this.setState({active_tab: newValue});

    }

    render(){
        return(
            <div className='resume-tab'>
                <TabContext value={this.state.active_tab}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={this.handleChange} centered>
                            <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>WEB</span>} value='1' />
                            <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>APP</span>} value='2' />
                            <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>GAME</span>} value='3' />
                                <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>EMBEDDED</span>} value='4' />
                        </TabList>
                    </Box>
                    {/* ------------------------------------- Web Dev -------------------------------------------------- */}
                    <TabPanel value="1"
                        sx={{
                            padding: '0px',
                        }}
                    >
                        <div className='resume-cards'>
                            <Card id='portfolio_card' shadow={0}>
                                <div className='projectHoverItems'>
                                    <a href='https://github.com/aanika23/my_portfolio' target="_blank"><div id="gitHubHover" className='hoveringDiv'></div></a>
                                </div>
                                <CardTitle id="portfolio_title"> </CardTitle>
                                <CardText id="portfolio_text">
                                        <b className='proj_name'> Portfolio </b><br/>
                                        <b className='proj_date'> September 2022 - Present </b><br/>
                                        <p className='proj_desc'>What you are viewing right now! <br/><br/>
                                        <b>Skills:</b> React, HTML, CSS, JaveScript, GitHub, Material UI, React MDL </p>
                                </CardText>
                            </Card>
                            <Card id='maphero_card' shadow={0}>
                                <div className='projectHoverItems'>
                                    <a href='https://github.com/aanika23/MapHero' target="_blank"><div id="gitHubHover" className='hoveringDiv'></div></a>
                                </div>
                                <CardTitle id="maphero_title"> </CardTitle>
                                <CardText id="maphero_text">
                                        <b className='proj_name'> MapHero </b><br/>
                                        <b className='proj_date'> February 2021 </b><br/>
                                        <p className='proj_desc'> Launched an online platform to help homeless people and tourists navigate to necessary facilities, 
                                        winning "Best use of Google Clouds" and "Women in STEM" awards out of over 100 teams at StormHacks. <br/><br/>
                                        <b>Skills:</b> HTML, CSS, JaveScript, GitHub, API, GoogleCloud </p>
                                </CardText>
                            </Card>
                            
                        </div>
                    </TabPanel>
                    {/* ------------------------------------- App Dev -------------------------------------------------- */}
                    <TabPanel value="2"
                        sx={{
                            padding: '0px',
                        }}
                    >
                        <div className='resume-cards'>
                            <Card id='eMinder_card' shadow={0}>
                                <div className='projectHoverItems'>
                                    <a href='https://github.com/aanika23/e-minder' target="_blank"><div id="gitHubHover" className='hoveringDiv'></div></a>
                                </div>
                                <CardTitle id="eMinder_title"> </CardTitle>
                                <CardText id="eMinder_text">
                                        <b className='proj_name'> e-minder </b><br/>
                                        <b className='proj_date'> June 2022 - Dec 2022 </b><br/>
                                        <p className='proj_desc'>Developed app using Flutter and Firebase to set reminders for forgotten items using RFID hardware <br/><br/>
                                        <b>Skills:</b> Dart, C++, Flutter, Firebase, GitHub </p>
                                </CardText>
                            </Card>                            
                        </div>
                    </TabPanel>
                    {/* ------------------------------------- Game Dev -------------------------------------------------- */}
                    <TabPanel value="3"
                        sx={{
                            padding: '0px',
                        }}
                    >
                        <div className='resume-cards'>
                            <Card id='game_card' shadow={0}>
                                <div className='projectHoverItems'>
                                    <a href='https://github.com/aanika23/MazeGame' target="_blank"><div id="gitHubHover" className='hoveringDiv'></div></a>
                                </div>
                                <CardTitle id="game_title"> </CardTitle>
                                <CardText id="game_text">
                                        <b className='proj_name'> Survive in the end </b><br/>
                                        <b className='proj_date'> January 2022 - April 2022 </b><br/>
                                        <p className='proj_desc'>Survive in the End is an arcade-style pseudo 3D game based on a 
                                        zombie apocalypse horror story where the main player must navigate a maze to collect vaccines, 
                                        avoid bad survivors and find a good survivor to open the exit door while managing their HP based on 
                                        interactions with survivors, with the number of required vaccines varying based on the chosen difficulty level. <br/><br/>
                                        <b>Skills:</b> Java, GitLab, Maven, Junit </p>
                                </CardText>
                            </Card>                            
                        </div>
                    </TabPanel>
                    {/* ------------------------------------- Embedded -------------------------------------------------- */}
                    <TabPanel value="4"
                        sx={{
                            padding: '0px',
                        }}
                    >
                        <div className='resume-cards'>
                            <Card id='intercom_card' shadow={0}>
                                <div className='projectHoverItems'>
                                    <a href='https://github.com/aanika23/intercom-system' target="_blank"><div id="gitHubHover" className='hoveringDiv'></div></a>
                                </div>
                                <CardTitle id="intercom_title"> </CardTitle>
                                <CardText id="intercom_text">
                                        <b className='proj_name'> Intercom System </b><br/>
                                        <b className='proj_date'> September 2022 - December 2022 </b><br/>
                                        <p className='proj_desc'>Developed a sophisticated intercom system for apartment complexes,
                                         allowing residents to initiate calls to other units with the press of a button,
                                          enabling secure and convenient access to the building.  <br/><br/>
                                        <b>Skills:</b> C, C++, SQLite, BeagleBone, Linux, Github </p>
                                </CardText>
                            </Card>     
                            <Card id='flipper_card' shadow={0}>
                                <CardTitle id="flipper_title"> </CardTitle>
                                <CardText id="flipper_text">
                                        <b className='proj_name'> Automated Page Flipper </b><br/>
                                        <b className='proj_date'> September 2018 - December 2018 </b><br/>
                                        <p className='proj_desc'> Designed and implemented an automated page 
                                        turning system utilizing precise motor control to smoothly and efficiently flip pages 
                                        for use by cooks and musicians. <br/><br/><br/>
                                        <b>Skills:</b> C, C++, Linux, Github </p>
                                </CardText>
                            </Card>                           
                        </div>
                    </TabPanel>
                </TabContext>

            </div>
        )
    }
}
//1. My portfolio
//2. Map Hero
//3. E-minder
//4. Survive in the end
//5. Intercom-system
//5. Automated Page Flipper