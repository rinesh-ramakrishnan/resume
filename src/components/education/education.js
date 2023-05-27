import React from "react";
import './education.css';

class Title extends React.Component {
    render() {
        return (
            <div className="section-title">
                {this.props.data}
            </div>
        );
    }
}

export default class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            education: {
                name: "Bachelor of Technology, Electronics & Communication Engineering",
                university: "Cochin University of Science and Technology(CUSAT)",
                graduation_year: "2011"
            }
        }
    }
    render() {
        return (
            <div className="education">
                <Title data="EDUCATION" />
                <div className="education-details">
                    {this.state.education.graduation_year}: <b>{this.state.education.name}</b>, {this.state.education.university}
                </div>
            </div>
        );
    }
}