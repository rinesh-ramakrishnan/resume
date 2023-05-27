import React from "react";
import awards from "../../data/awards";
import './awards.css';

class Title extends React.Component {
    render() {
        return (
            <div className="section-title">
                {this.props.data}
            </div>
        );
    }
}

class Award extends React.Component {
    render() {
        return (
            <li className="award">
                {this.props.data}
            </li>
        );
    }
}

export default class Awards extends React.Component {
    render() {
        let award_list = [];
        let i = 0;
        for(let award of awards) {
            award_list.push(
                <Award data={award} index={i} key={i}/>
            );
            i++;
        }
        return (
            <div className="awards">
                <Title data="ACHIEVEMENTS" />
                <ul className="award-container">
                    {award_list}
                </ul>
            </div>
        );
    }
}