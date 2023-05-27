import React from "react";
import skills from '../../data/skills';
import './skills.css';

class Title extends React.Component {
    render() {
        return (
            <div className="section-title">
                {this.props.data}
            </div>
        );
    }
}

class Skill extends React.Component {
    render() {
        return (
            <span className="skill">
                {this.props.data};&nbsp;
            </span>
        );
    }
}

export default class Skills extends React.Component {
    render() {
        let skills_list = [];
        let i = 0;
        for(let skill of skills) {
            skills_list.push(
                <Skill data={skill} index={i} key={i}/>
            );
            i++;
        }
        return (
            <div className="skills">
                <Title data="SKILLS" />
                <div className="skill-container">
                    {skills_list}
                </div>
            </div>
        );
    }
}