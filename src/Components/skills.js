import React, { Component } from 'react';
import {Tabs, Tab, Chip, ChipContact} from 'react-mdl';

class Skills extends Component {
    constructor(props){
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if (this.state.activeTab === 0){
            let devops = document.getElementsByClassName("devops-chip");
            let dev = document.getElementsByClassName("dev-chip");
            let general =document.getElementsByClassName("general-chip");

            for (let i=0; i<devops.length; i++)  {devops[i].style.animation = 'fade-in 1s linear forwards'};
            for (let i=0; i<dev.length; i++)  {dev[i].style.animation = 'fade-in 1s linear forwards'};
            for (let i=0; i<general.length; i++)  {general[i].style.animation = 'fade-in 1s linear forwards'};

        }
        else if(this.state.activeTab === 1){
            let devops = document.getElementsByClassName("devops-chip");
            let dev = document.getElementsByClassName("dev-chip");
            let general =document.getElementsByClassName("general-chip");

            for (let i=0; i<devops.length; i++)  {devops[i].style.animation = 'fade-in 1s linear forwards'};
            for (let i=0; i<dev.length; i++)  {dev[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<general.length; i++)  {general[i].style.animation = 'fade-out 1s linear forwards'};
        }
        else if(this.state.activeTab === 2){
            let devops = document.getElementsByClassName("devops-chip");
            let dev = document.getElementsByClassName("dev-chip");
            let general =document.getElementsByClassName("general-chip");

            for (let i=0; i<devops.length; i++)  {devops[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<general.length; i++)  {general[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<dev.length; i++)  {dev[i].style.animation = 'fade-in 1s linear forwards'};
        }
        else if(this.state.activeTab === 3){
            let devops = document.getElementsByClassName("devops-chip");
            let dev = document.getElementsByClassName("dev-chip");
            let general =document.getElementsByClassName("general-chip");

            for (let i=0; i<devops.length; i++)  {devops[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<dev.length; i++)  {dev[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<general.length; i++)  {general[i].style.animation = 'fade-in 1s linear forwards'};
        }
    }

    render(){
        const chip = {
            backgroundColor: 'black',
            color: 'white',
        }
        return(
            <div className='resume-tab'>
                <div id='mobile-app-bar'>
                    <a className='otherpage-alif' style={{textDecoration:'none'}} href='/'>  Alif  </a>
                    <p className='current-page'>Skills</p>
                </div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                    <Tab id='tababo'> All </Tab>
                    <Tab id='tababo'> DevOps </Tab>
                    <Tab id='tababo'> Develoment </Tab>
                    <Tab id='tababo'> General </Tab>
                </Tabs>
                {/* <div className='hobbies'>At last! What you are really waiting for...</div> */}

                <div id='skills-container'>
                <div id='skills'>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/C.png'/>
                    </ChipContact> C&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src="/Skills/WireShark.png"/>
                    </ChipContact> Wireshark&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Visio.png'/>
                    </ChipContact> Microsoft Visio&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/prometheus.png'/>
                    </ChipContact> Prometheus&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/JavaScript.png'/>
                    </ChipContact> JavaScript&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/VisualStudio.png'/>
                    </ChipContact> Visual Studio Code&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Postman.png'/>
                    </ChipContact> Postman&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/wordpress.png'/>
                    </ChipContact> Wordpress&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/actions.png'/>
                    </ChipContact> GitHub Actions&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/VirtualBox.png'/>
                    </ChipContact> Virtual Box&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/C++.png'/>
                    </ChipContact> C++&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/vmware.png'/>
                    </ChipContact> vmware&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/TravisCI.png'/>
                    </ChipContact> Travis CI&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/CPanel.png'/>
                    </ChipContact> cPanel&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/SSH.png'/>
                    </ChipContact> Secure Shell&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/MongoDB.png'/>
                    </ChipContact> Mongo DB&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Bash.jpg'/>
                    </ChipContact> BASH&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Putty.jpg'/>
                    </ChipContact> Putty&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Git.jpg'/>
                    </ChipContact> GitHub&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/CSS.jpg'/>
                    </ChipContact> CSS&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/SQLite.png'/>
                    </ChipContact> SQLite&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/RaspberryPi.png'/>
                    </ChipContact> Raspberry Pi&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/SQLServer.jpg'/>
                    </ChipContact> SQL Server Management Studio&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Networking.jpg'/>
                    </ChipContact> Enterprise Networking&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/OSI.png'/>
                    </ChipContact> OSI Model and Protocols&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Python.png'/>
                    </ChipContact> Python&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/React.png'/>
                    </ChipContact> React&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/R.jpg'/>
                    </ChipContact> R Studio&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Angular.png'/>
                    </ChipContact> Angular&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/VHDL.png'/>
                    </ChipContact> VHDL&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Flask.png'/>
                    </ChipContact> Flask&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/HTML.png'/>
                    </ChipContact> HTML&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/TDD.png'/>
                    </ChipContact> Test Driven Develoment&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Stats.jpg'/>
                    </ChipContact> Statistical Analysis&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Agile.jpg'/>
                    </ChipContact> Agile Development Method&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/OS.jpg'/>
                    </ChipContact> Windows / MacOS / Linux&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Office.jpg'/>
                    </ChipContact> Microsoft Word / Powerpoint / Excel&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/SQL.png'/>
                    </ChipContact> MySQL&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Vim.png'/>
                    </ChipContact> Vi / Vim&nbsp;&nbsp;&nbsp;
                    </Chip>


                    {/*-------------------- Term 3 Things --------------------------*/}


                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/WinServer.png'/>
                    </ChipContact> Windows Server 2019&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/AWS.png'/>
                    </ChipContact> Amazon Web Services&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Nginx.png'/>
                    </ChipContact> NginX&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Apache.png'/>
                    </ChipContact> Apache HTTP Server&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/PyTorch.png'/>
                    </ChipContact> PyTorch&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/ML.png'/>
                    </ChipContact> Machine Learning&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='dev-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Java.jpg'/>
                    </ChipContact> Java&nbsp;&nbsp;&nbsp;
                    </Chip>


                    {/*-------------------- Term 3 Things --------------------------*/}



                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Confluence.png'/>
                    </ChipContact> Confluence&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Jira.jpg'/>
                    </ChipContact> Jira&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/GitLab.jpg'/>
                    </ChipContact> GitLab&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Jenkins.png'/>
                    </ChipContact> Jenkins&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/SonarQube.png'/>
                    </ChipContact> SonarQube&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Packer.png'/>
                    </ChipContact> Packer&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/SOA.png'/>
                    </ChipContact> Service Oriented Architecture&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Docker.png'/>
                    </ChipContact> Docker&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Kubernetes.png'/>
                    </ChipContact> Kubernetes&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Tableau.png'/>
                    </ChipContact> Tableau&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/PowerBI.png'/>
                    </ChipContact> Power BI&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Azure.jpg'/>
                    </ChipContact> Microsoft Azure&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Grafana.jpg'/>
                    </ChipContact> Grafana&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/InfluxDB.png'/>
                    </ChipContact> InfluxDB&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Apache.png'/>
                    </ChipContact> Apache JMeter&nbsp;&nbsp;&nbsp;
                    </Chip>


                    {/*-------------------- East Side Games Things --------------------------*/}


                    <Chip className='devops-chip' style={chip}><ChipContact>
                            <img alt='logo' class="mdl-chip__contact" src='/Skills/datadog.jpg'/>
                    </ChipContact> DataDog&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                            <img alt='logo' class="mdl-chip__contact" src='/Skills/terraform.png'/>
                    </ChipContact> Terraform&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                            <img alt='logo' class="mdl-chip__contact" src='/Skills/swarm.png'/>
                    </ChipContact> Docker Swarm&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                            <img alt='logo' class="mdl-chip__contact" src='/Skills/plastic.png'/>
                    </ChipContact> PlasticSCM&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                            <img alt='logo' class="mdl-chip__contact" src='/Skills/couchbase.png'/>
                    </ChipContact> CouchbaseDB&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                            <img alt='logo' class="mdl-chip__contact" src='/Skills/lastpass.png'/>
                    </ChipContact> Lastpass&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='general-chip' style={chip}><ChipContact>
                            <img alt='logo' class="mdl-chip__contact" src='/Skills/pagerduty.png'/>
                    </ChipContact> PagerDuty&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                            <img alt='logo' class="mdl-chip__contact" src='/Skills/atlantis.jpg'/>
                    </ChipContact> Atlantis&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='devops-chip' style={chip}><ChipContact>
                            <img alt='logo' class="mdl-chip__contact" src='/Skills/ansible.jpg'/>
                    </ChipContact> Ansible&nbsp;&nbsp;&nbsp;
                    </Chip>
                </div>
                </div>

                <section>
                    <div className='content'>{this.toggleCategories()}</div>
                </section>
                <div id='job-footer-space'></div>
            </div>
        )
    }
}

export default Skills;




