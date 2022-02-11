import './Introduction.css';
import React, { Component } from 'react';

function Introduction(props) {
    return (
        <div className="introduction">
            <h2>INTRODUCTION</h2>
            <div className="name">Name :{props.name}</div>
            <div className="dob">DOB :{props.dob}</div>
            <div className="email">Email :{props.email}</div>
            <div className="address">Address :{props.address}</div>
            <div className="phone">phone :{props.phone}</div>
        </div>
    )
}
class Intro extends Component {
    constructor(props){
        super(props)
       this.state= {name:this.props.name}
    }
    
    render() {
        return (
            <div className="introduction">
                <h2>INTRODUCTION</h2>
                <div className="name">Name :{this.state.name}</div>
    
                <div className="dob">DOB :{this.props.dob}</div>
                <div className="email">Email :{this.props.email}</div>
                <div className="address">Address :{this.props.address}</div>
                <div className="phone">phone :{this.props.phone}</div>
            </div>
        )
    }
}
export default Intro;
