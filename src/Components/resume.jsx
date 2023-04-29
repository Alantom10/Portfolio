import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import ReactWordcloud from 'react-wordcloud';

import './css/resume.css';
import ResumePDF from './image/Resume.pdf';

export default class Resume extends Component{
    
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

        let words = [
            { text: 'Tennis', value: 10 },
            { text: 'Volleyball', value: 10 },
            { text: 'Makeup', value: 20 },
            { text: 'Bullet Journalling', value: 20 },
            { text: 'Guitar', value: 30 },
            { text: 'Dancing', value: 30 },
            { text: 'LeetCode', value: 30 },
            { text: 'Fun Facts', value: 30 },
            { text: 'Weight-lifting', value: 30 },
            { text: 'Learning', value: 40 },
            { text: 'Singing', value: 40 },
            { text: 'Baking', value: 40 },
            { text: 'Netflix', value: 40 },
            { text: 'Badmintion', value: 50 },
            { text: 'Eating', value: 50 },
            { text: 'Cooking', value: 50 },
            { text: 'Praying', value: 50},
            { text: 'Problem Solving', value: 60 },
            { text: 'Friends', value: 70 },
            { text: 'Stargazing', value: 80},
            { text: 'Music', value: 100 },
            { text: 'Travelling', value: 100 },
        ];

        let options = {              
            fontFamily: "'Amatic SC', cursive",
            fontSizes: [20, 50],
            fontWeight: '900',
            width: '50vw',
            enableTooltip: false
        };

        return(
            <div className='resume-tab'>
                 <TabContext value={this.state.active_tab}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={this.handleChange} centered>
                            <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>EXPERIENCE</span>} value='1' />
                            <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>EDUCATION</span>} value='2' />
                            <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>HOBBIES</span>} value='3' />
                                <Tab id='tababout'  label={<span style={
                                { color: 'white', fontFamily: "'Chathura', sans-serif", fontSize: "3vh" }}>RESUME</span>} value='4' />
                        </TabList>
                    </Box>
                    <TabPanel value="1"
                        sx={{
                            padding: '0px',
                        }}
                    >
                        <div className='resume-cards'>
                            <Card id='avestec_card' shadow={0}>
                                <CardTitle id="avestec_title"> </CardTitle>
                                <CardText id="avestec_text">
                                    <div className='resume-card-texts'>
                                        <br/><b className='resume-company'> Avestec Technologies </b><br/>
                                        <b className='resume-role'> Software Engineer </b><br/>
                                        <b className='resume-date'>February 2022 - Present </b><br/><br/>
                                        <p className='resume-desc'>Created a program using Python Django and JavaScript to enhance drone reporting procedures which
                                             organizes flight information for graphic analysis.
                                              Also utilized Linux to update drone status and communicate with Tether Box.</p>

                                    </div>
                                </CardText>
                            </Card>
                            <Card id='greenlight_card' shadow={0}>
                                <CardTitle id="greenlight_title"> </CardTitle>
                                <CardText id="greenlight_text">
                                    <div className='resume-card-texts'>
                                        <br/><b className='resume-company'> Greenlight Innovations </b><br/>
                                        <b className='resume-role'> Full-Stack Developer Intern</b><br/>
                                        <b className='resume-date'>May 2021 - December 2021 </b><br/><br/>
                                        <p className='resume-desc'>Developed web applications using Python Django, JavaScript, PostgreSQL,
                                             to allow managers and executives to view project performance reviews, and
                                            automate repetitive tasks for accounting and manufacturing departments.</p>
                                    </div>
                                </CardText>
                            </Card>
                            <Card id='seaspan_card' shadow={0}>
                                <CardTitle id="seaspan_title"> </CardTitle>
                                <CardText id="seaspan_text">
                                    <div className='resume-card-texts'>
                                        <br/><b className='resume-company'> Seaspan VSY </b><br/>
                                        <b className='resume-role'> Electrical Engineer Intern </b><br/>
                                        <b className='resume-date'>January 2020 - April 2020 </b><br/><br/>
                                        <p className='resume-desc'>Designed and launched a user-friendly interface and ship locator program using
                                             VBA macro that cross-references company data and organizes blocks and 
                                             compartments to provide clients with a visual representation of various ship models.</p>

                                    </div>
                                </CardText>
                            </Card>
                        </div>
                    </TabPanel>
                    <TabPanel value="2"
                        sx={{
                            padding: '0px',
                        }}
                    >
                        <div className='resume-cards'>
                            <Card id='SFU-card' shadow={10}>
                                <CardTitle id='sfu-title'> </CardTitle>
                                <CardText id='sfu-text'>
                                    <div className="resume-card-texts">
                                        <p className='school_cards'> 
                                        <b className='resume-company'> Simon Fraser University </b> </p>
                                        <p className='resume-desc'>Faculty of Applied Sciences <br/>
                                        Computer Enginnering <br/>
                                        September 2018 - December 2022 </p>
                                    </div>
                                </CardText>
                            </Card>
                        </div>
                        
                    </TabPanel>
                    <TabPanel value="3"
                        sx={{
                            padding: '0px',
                        }}
                    >
                        <div className='hobbies'>
                            <b>When I am not Developing... <br/><br/>You can find me doing one of the following!</b>
                            <ReactWordcloud id='wordcloud' words={words} options={options} />
                        </div>
                        
                    </TabPanel>
                    <TabPanel value="4"
                        sx={{
                            padding: '0px',
                        }}
                    >
                         <Card id='downres_card' shadow={0}>
                            <CardTitle id='downres_title'> </CardTitle>
                            <CardText id='downres_text'> 
                                <div className="resume-card-texts">
                                <b id='downres_subtitle'> Full Resume </b> <br/>
                                    In Portable Document Format <br/>
                                </div>
                            </CardText>
                            <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                                <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
                                    <button className='downres_button'>View PDF</button>
                                </a>
                                <a href={ResumePDF} download>
                                    <button className='downres_button'>Download PDF</button>
                                </a>
                            </CardActions>
                        </Card>
                        
                    </TabPanel>
                </TabContext>
              
            </div>
           
        )
    }

}


