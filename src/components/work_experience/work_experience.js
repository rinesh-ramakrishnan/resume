import React from "react";

import work_experience from '../../data/work_experience';
import './work_experience.css';

class Title extends React.Component {
    render() {
        return (
            <div className="section-title">
                {this.props.data}
            </div>
        );
    }
}

class RoleCompany extends React.Component {
    render() {
        return (
            <div className="role-company">
                <div className="company">{this.props.company}</div>
                <div className="role">&nbsp;-&nbsp;{this.props.role}</div>
            </div>
        );
    }
}

class Client extends React.Component {
    render() {
        return (
            <div className="client">Client: {this.props.client}</div>
        );
    }
}

class PeriodLocation extends React.Component {
    render() {
        return (
            <div className="period-location">
                <div className="period">{this.props.startDate} - {this.props.endDate}</div>
                <div className="location">{this.props.location}</div>
            </div>
        );
    }
}

class Responsibilities extends React.Component {
    render() {
        let resp_list = []
        for(let responsibility of this.props.responsibilities) {
            resp_list.push(<li className="responsibility">{responsibility}</li>);
        }
        return (
            <ul className="responsibilities">
                {resp_list}
            </ul>
        );
    }
}

class Experience extends React.Component {
    render() {
        return (
            <div className={`experience-${this.props.index}`}>
                <RoleCompany role={this.props.data.role} company={this.props.data.company} />
                <Client client={this.props.data.client} />
                <PeriodLocation
                    startDate={this.props.data.startDate}
                    endDate={this.props.data.endDate}
                    location={this.props.data.location}
                />
                <Responsibilities responsibilities={this.props.data.responsibilities} />
            </div>
        );
    }
}

export default class WorkExperience extends React.Component {
    render() {
        let experiences = [];
        let i = 0;
        for(let experience of work_experience) {
            console.log(experience);
            experiences.push(
                <Experience data={experience} index={i} key={i}/>
            );
            i++;
        }
        return (
            <div className="work-experience">
                <Title data="PROFESSIONAL EXPERIENCE" />
                <div className="experience-container">
                    {experiences}
                </div>
            </div>
        );
    }
}