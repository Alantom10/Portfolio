import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// import TabContext from "@mui/material/Table/TableContext";
// import TabList from "@mui/material/Table/TableContext";
// import TabPanel from "@mui/material/Table/TableContext";
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
            { text: 'Cycling', value: 10 },
            { text: 'Fashion', value: 10 },
            { text: 'Reading', value: 20 },
            { text: 'Hiking', value: 20 },
            { text: 'Guitar', value: 30 },
            { text: 'Sleeping', value: 30 },
            { text: 'LeetCode', value: 30 },
            { text: 'Fun Facts', value: 30 },
            { text: 'Esports', value: 30 },
            { text: 'Learning', value: 40 },
            { text: 'Singing', value: 40 },
            { text: 'Problem Solving', value: 40 },
            { text: 'Netflix', value: 40 },
            { text: 'Stargazing', value: 50 },
            { text: 'Eating', value: 50 },
            { text: 'Cooking', value: 50 },
            { text: 'Praying', value: 50},
            { text: 'Soccer', value: 60 },
            { text: 'Friends', value: 70 },
            { text: 'Art', value: 80},
            { text: 'Gaming', value: 100 },
            { text: 'Powerlifting', value: 100 },
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
                            <Card id='tsworks2_card' shadow={0}>
                                <CardTitle id="tsworks2_title"> </CardTitle>
                                <CardText id="tsworks2_text">
                                    <div className='resume-card-texts'>
                                        <br/><b className='resume-company'> tsworks </b><br/>
                                        <b className='resume-role'> Software Engineer </b><br/>
                                        <b className='resume-date'> April 2022 - January 2023 </b><br/><br/>
                                        <p className='resume-desc'> Developed and maintained REST APIs using FastAPI framework,
                                            implemented Unit Tests to validate REST API endpoints and developed automated tests
                                            to validate GraphQL APIs using Pytest.</p>
                                    </div>
                                </CardText>
                            </Card>
                            <Card id='netapp_card' shadow={0}>
                                <CardTitle id="netapp_title"> </CardTitle>
                                <CardText id="netapp_text">
                                    <div className='resume-card-texts'>
                                        <br/><b className='resume-company'> NetApp </b><br/>
                                        <b className='resume-role'> Software Developer in Test Co-Op </b><br/>
                                        <b className='resume-date'> May 2021 - December 2021 </b><br/><br/>
                                        <p className='resume-desc'>  Tested NetApp StorageGRID's AWS S3 tiering functionality,
                                            improving software quality by 20%. Performed Manual testing using Black box and White box techniques,
                                            automated UI and API testing using Ruby and Cucumber frameworks.</p>
                                    </div>
                                </CardText>
                            </Card>
                            <Card id='tsworks_card' shadow={0}>
                                <CardTitle id="tsworks_title"> </CardTitle>
                                <CardText id="tsworks_text">
                                    <div className='resume-card-texts'>
                                        <b className='resume-company'> tsworks </b><br/>
                                        <b className='resume-role'> Software Engineer Intern </b><br/>
                                        <b className='resume-date'> March 2020 - April 2021 </b><br/><br/>
                                        <p className='resume-desc'> Developed web pages using Angular 10 with Material Design,
                                            integrated multi-browser compatible and mobile responsive UI components with Restful APIs,
                                            and created website prototypes using Adobe XD and Illustrator.</p>
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
                                        Faculty of Applied Sciences <br/>
                                        Computer Science <br/>
                                        September 2018 - December 2022
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


