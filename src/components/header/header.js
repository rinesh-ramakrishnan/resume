import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

import PersonalDetails from '../../data/personal_details';
import icons from '../../data/icons';

class Name extends React.Component {
    render() {
        return(
            <h1 className="name">{this.props.data}</h1>
        );
    }
}

class Title extends React.Component {
    render() {
        return(
            <h1 className="title">{this.props.data}</h1>
        );
    }
}

class GridElement extends React.Component {
    render() {
        let element;
        if(this.props.link === ""){
            element = <span className="icon-text">{this.props.data}</span>
        } else {
            element = <a className="icon-text link" href={this.props.link}>{this.props.data}</a>
        }
        return(
            <div className={`element-${this.props.index}`}>
                <FontAwesomeIcon icon={this.props.icon} />
                {element}
            </div>
        );
    }
}

class PersonalDataGrid extends React.Component {
    render() {
        let personaldata = [];
        let i = 0;
        for(let key in this.props.data) {
            let icon = icons[key];
            let text = "";
            let link = "";
            if(icon.default_text === "") {
                text = this.props.data[key];
            } else {
                text = icon.default_text;
                link = this.props.data[key];
            }
            personaldata.push(
                <GridElement key={i} data={text} index={i} icon={icon.icon} link={link}/>
            );

            i++;
        }

        return(
            <div className="personal-details">
                {personaldata}
            </div>
        );
    }
}

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me">
                {this.props.data}
            </div>
        );
    }
}

export default class Header extends React.Component {
    render() {
            const dateOfBirth = PersonalDetails.dateOfBirth;
            const email = PersonalDetails.email;
            const contact = PersonalDetails.contact;
            const linkedIn = PersonalDetails.linkedIn;
            const credly = PersonalDetails.credly;
            const location = PersonalDetails.location;
            const github = PersonalDetails.github;

            const PersonalData = {
                dateOfBirth: dateOfBirth, 
                email: email, 
                contact: contact, 
                location: location, 
                linkedIn: linkedIn, 
                credly: credly,
                github: github
            }

        return(
            <div className="header">
                <Name data={PersonalDetails.name}/>
                <Title data={PersonalDetails.title}/>
                <PersonalDataGrid data={PersonalData}/>
                <AboutMe data={PersonalDetails.description}/>
            </div>
        );
    }
}