import React, {Component} from 'react';
import {Tabs, Tab, Card, CardTitle, CardText} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        const title = {
            fontSize: '4vh',
            fontFamily: "'ZCOOL QingKe HuangYou', cursive"
        }

        const date = {
            fontSize: '2vh',
            fontFamily: "'ZCOOL QingKe HuangYou', cursive"
        }

        const description = {
            fontSize: '4vh',
            width: '90%',
            lineHeight: '3vh'
        }
        if (this.state.activeTab === 0){
            return(
                <div className='resume-tab'>
                
                    <Card id='CAF-card1' shadow={0}>
                        <div className='projectHoverItems'>
                            <a href='https://github.com/Alif-B/AutoMo.git'><div id="gitHubHover" className='hoveringDiv'></div></a>
                            <a href='https://automobc.ca/'><div id="liveDemoHover" className='hoveringDiv'></div></a>
                        </div>
                        <CardTitle id='automo-proj'> </CardTitle>
                        <CardText id='mohsen-text1'>
                            <b style={title}> AutoMo BC </b> <br/>
                            <b style={date}>October 2019 - Present</b>
                            <p style={description}> A production environment website
                            to book a service appointment with AutoMo BC and stores provided data in a Relational Database.<br/><br/>
                            <b>Skills:</b> HTML, CSS, JavaScript, PHP, SQL, Database Desgining <br/></p>
                        </CardText>
                    </Card>
                    <Card id='Mohsen-card1'  shadow={0}>
                        <div className='projectHoverItems'>
                            <a href='https://github.com/crockk/collaborative-canvas.git'><div id="gitHubHover" className='hoveringDiv'></div></a>
                            <a href='https://acit2911-canvas.herokuapp.com/'><div id="liveDemoHover" className='hoveringDiv'></div></a>
                        </div>
                        <CardTitle id='canvas-title'> </CardTitle>
                        <CardText id='canvas-text'> 
                            <b style={title}> Colaborative Canvas </b> <br/>
                            <b style={date}>April 2020 - June 2020</b>
                            <p style={description}>A social media platform that allows users to visit each other's
                            canvases and see, create, update and delete pixels to create art! <br/><br/>
                            <b>Skills:</b> Python, Peewee ORM, Flask Web Framework, SQLite Database, Mocha  </p>
                        </CardText>
                    </Card>
                    <Card id='Microserve-card1' shadow={0}>
                        <div className='projectHoverItems'>
                            <a href='https://github.com/Alif-B/Portfolio'><div id="gitHubHover" className='hoveringDiv'></div></a>
                            <a href='https://alif.link/'><div id="liveDemoHover" className='hoveringDiv'></div></a>
                        </div>
                        <CardTitle id='portfolio-title'> </CardTitle>
                        <CardText id='portfolio-text'> 
                            <b style={title}> Portfolio </b> <br/>
                            <b style={date}>June 2020 - Present</b>
                            <p style={description}>This beautiful piece of art right here ... Picasso! 
                            Contact me to place your ads on this website!<br/><br/>
                            <b>Skills:</b> React, HTML, CSS, JaveScript, GitHub, Material UI, React MDL, CloudFlare, Hostinger, cPanels </p>
                        </CardText>
                    </Card>
                    <div id='proj-footer-space'/>
                </div>
            )
        }
        else {
            return(
                <div className='resume-tab'>
                    <Card id='CAF-card1' shadow={0}>
                        <div className='projectHoverItems'>
                            <a href='https://github.com/Alif-B/Soldier-Management.git'><div id="gitHubHoverFull" className='hoveringDiv'></div></a>
                        </div>
                        <CardTitle id='soldier-proj'> </CardTitle>
                        <CardText id='caf-text1'>
                            <b style={title}>Soldier Deployment</b> <br/>
                            <b style={date}>January 2020 - April 2020</b>
                            <p style={description}>A python based software that uses tkinter GUI Framework to
                            track soldier deployments locations and status. <br/><br/>
                            <b>Skills:</b> Python, Peewee ORM, SQLite DB, Test Driven Development, Flask RESTful API, Postman </p>
                        </CardText>
                    </Card>
                    <Card id='Mohsen-card1' shadow={0}>
                    <div className='projectHoverItems'>
                        <a href='https://github.com/Alif-B/MontyHall'><div id="gitHubHoverFull" className='hoveringDiv'></div></a>
                    </div>
                        <CardTitle id='monty-title'> </CardTitle>
                        <CardText id='monty-text'> 
                            <b style={title}> Monty Hall Simulaton </b> <br/>
                            <b style={date}>February 2020 - March 2020</b>
                            <p style={description}>An RLab experiment that runs the monty hall problem a set number of times
                            and reports the results to confirm the decision of switching the door when given the option to <br/><br/>
                            <b>Skills:</b> Problem Solving, RLab </p>
                        </CardText>
                    </Card>
                    <Card id='Microserve-card1' shadow={0}>
                        <div className='projectHoverItems'>
                            <a href='#Microserve-card1'><div id="naHoverFull" className='hoveringDiv'></div></a>
                        </div>
                        <CardTitle id='router-title'> </CardTitle>
                        <CardText id='router-text'> 
                            <b style={title}> Virtual Router </b> <br/>
                            <b style={date}>January 2020 - April 2020</b>
                            <p style={description}>Create a router for a virtual network built on Raspberry Pi. Then
                            tested it by adding multiple CentOS VM clients to the network<br/><br/>
                            <b>Skills:</b> VMWare, Vi/Vim, BASH Scripting, Windows Linux Subsystem, Windows Powershell </p>
                        </CardText>
                    </Card>
                    <div id='proj-footer-space'/>
                </div>
            )
        }
    }

    render(){
        return(
            <div className='resume-tab'>
                <div id='mobile-app-bar'>
                    <a className='otherpage-alif' style={{textDecoration:'none'}} href='/'>  Alif  </a>
                    <p className='current-page'>Projects</p>
                </div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                    <Tab id='tababo'> Cloud </Tab>
                    <Tab id='tababo'> Local </Tab>
                </Tabs>
                <section>
                    <div className='content'>{this.toggleCategories()}</div>
                </section>
            </div>
        )
    }
}

export default Projects;