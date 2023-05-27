import React from "react";
import certifications from "../../data/certifications";
import './certifications.css';

class Title extends React.Component {
    render() {
        return (
            <div className="section-title">
                {this.props.data}
            </div>
        );
    }
}

class Certification extends React.Component {
    render() {
        return (
            <li className="cert">
                {this.props.data}
            </li>
        );
    }
}

export default class Certifications extends React.Component {
    render() {
        let cert_list = [];
        let i = 0;
        for(let cert of certifications) {
            cert_list.push(
                <Certification data={cert} index={i} key={i}/>
            );
            i++;
        }
        return (
            <div className="certifications">
                <Title data="CERTIFICATIONS & BADGES" />
                <ul className="cert-container">
                    {cert_list}
                </ul>
            </div>
        );
    }
}