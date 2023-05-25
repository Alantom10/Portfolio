import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// import TabContext from "@mui/material/Table/TableContext";
// import TabList from "@mui/material/Table/TableContext";
// import TabPanel from "@mui/material/Table/TableContext";
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
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>AI</span>} value='2' />
                            <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>APP</span>} value='3' />
                            <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>GAME</span>} value='4' />
                                <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>DATA SCIENCE</span>} value='5' />
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
                                    <a href='https://github.com/Alantom10/Portfolio' target="_blank"><div id="gitHubHover" className='hoveringDiv'></div></a>
                                </div>
                                <CardTitle id="portfolio_title"> </CardTitle>
                                <CardText id="portfolio_text">
                                        <b className='proj_name'> Portfolio </b><br/>
                                        <b className='proj_date'> January 2023 - Present </b><br/>
                                        <p className='proj_desc'>What you are viewing right now! <br/><br/>
                                        <b>Skills:</b> React, HTML, CSS, JaveScript, GitHub, Material UI, React MDL </p>
                                </CardText>
                            </Card>
                        </div>
                    </TabPanel>
                    {/* ------------------------------------- AI Dev -------------------------------------------------- */}
                    <TabPanel value="2"
                              sx={{
                                  padding: '0px',
                              }}
                    >
                        <div className='resume-cards'>
                            <Card id='intercom_card' shadow={0}>
                                <div className='projectHoverItems'>
                                    <a href='https://github.com/Alantom10/reversi' target="_blank"><div id="gitHubHover" className='hoveringDiv'></div></a>
                                </div>
                                <CardTitle id="reversi_title"> </CardTitle>
                                <CardText id="intercom_text">
                                    <b className='proj_name'> Reversi </b><br/>
                                    <b className='proj_date'> August 2020 </b><br/>
                                    <p className='proj_desc'> Developed an AI controlled game of Reversi using
                                        2 Monte-Carlo Tree Search algorithms i.e., the Pure MCTS and MCTS using heuristics. <br/><br/>
                                        <b>Skills:</b> C++, Linux, Github </p>
                                </CardText>
                            </Card>
                            <Card id='flipper_card' shadow={0}>
                                <div className='projectHoverItems'>
                                    <a href='https://github.com/cindytyn/Solve-8-puzzle-with-Imitation-learning' target="_blank"><div id="gitHubHover" className='hoveringDiv'></div></a>
                                </div>
                                <CardTitle id="flipper_title"> </CardTitle>
                                <CardText id="flipper_text">
                                    <b className='proj_name'> 8 Puzzle </b><br/>
                                    <b className='proj_date'> November 2022 - December 2022 </b><br/>
                                    <p className='proj_desc'> Implemented a solution to the 8 puzzle problem using
                                        imitation learning and a* search as the expert learner. <br/><br/><br/>
                                        <b>Skills:</b> Python, Jupyter Notebook, Github </p>
                                </CardText>
                            </Card>
                        </div>
                    </TabPanel>
                    {/* ------------------------------------- App Dev -------------------------------------------------- */}
                    <TabPanel value="3"
                        sx={{
                            padding: '0px',
                        }}
                    >
                        <div className='resume-cards'>
                            <Card id='eMinder_card' shadow={0}>
                                <div className='projectHoverItems'>
                                    <a href='https://github.com/Alantom10/restaurant-inspection-app' target="_blank"><div id="gitHubHover" className='hoveringDiv'></div></a>
                                </div>
                                <CardTitle id="restaurant_title"> </CardTitle>
                                <CardText id="eMinder_text">
                                        <b className='proj_name'> Restaurant Inspection </b><br/>
                                        <b className='proj_date'> July 2020 - August 2020 </b><br/>
                                        <p className='proj_desc'> Developed an app using Android Studio to show restaurant inspection hazard ratings <br/><br/>
                                        <b>Skills:</b> Java, Android Studio, Adobe Illustrator, GitLab, Junit, Google Maps API </p>
                                </CardText>
                            </Card>
                        </div>
                    </TabPanel>
                    {/* ------------------------------------- Game Dev -------------------------------------------------- */}
                    <TabPanel value="4"
                        sx={{
                            padding: '0px',
                        }}
                    >
                        <div className='resume-cards'>
                            <Card id='game_card' shadow={0}>
                                <div className='projectHoverItems'>
                                    <a href='https://github.com/Alantom10/zombieseeker' target="_blank"><div id="gitHubHover" className='hoveringDiv'></div></a>
                                </div>
                                <CardTitle id="game_title"> </CardTitle>
                                <CardText id="game_text">
                                        <b className='proj_name'> ZombieSeeker </b><br/>
                                        <b className='proj_date'> June 2020 </b><br/>
                                        <p className='proj_desc'> ZombieSeeker is a Zombie-themed 2D mine seeker strategic game
                                            where the player has to click tiles in order to find mines hidden under some of them. <br/><br/>
                                        <b>Skills:</b> Java, Android Studio, GitLab, Junit </p>
                                </CardText>
                            </Card>
                        </div>
                    </TabPanel>
                    {/* ------------------------------------- Data Science -------------------------------------------------- */}
                    <TabPanel value="5"
                        sx={{
                            padding: '0px',
                        }}
                    >
                        <div className='resume-cards'>
                            <Card id='game_card' shadow={0}>
                                <div className='projectHoverItems'>
                                    <a href='https://github.com/Alantom10/activity-detection' target="_blank"><div id="gitHubHover" className='hoveringDiv'></div></a>
                                </div>
                                <CardTitle id="activity_title"> </CardTitle>
                                <CardText id="game_text">
                                    <b className='proj_name'> Activity Detection </b><br/>
                                    <b className='proj_date'> January 2022 - April 2022 </b><br/>
                                    <p className='proj_desc'> Analyzes gait and detect asymmetry using smartphone accelerometers
                                        to leverage smartphone sensors for valuable insights on walking patterns. <br/><br/>
                                        <b>Skills:</b> Python, GitHub, Jupyter Notebook </p>
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
//2. Reversi
//3. 8 Puzzle
//4. Restaurant Inspection
//5. ZombieSeeker
//5. Activity Detection