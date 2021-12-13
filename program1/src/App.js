
import './App.css';
import React from 'react';
import Intro from './component/Introduction';
import Qualification from './component/Qualification';
import Projects from  './component/Projects';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.apple = {
      name: "Mohan",
      DOB: "08/04/1999",
      Email: "mohannp.mca20@rvce.edu.in",
      address: "RV College of Engineering",
      Phone: 9236483234,
    
      school: "kvs",
      cgpa: 8.6,
      ug: "rv",
      percentage: 71.33,
      pg: "rvce",
      cgpapg: 7.77,
      
      web:"front-end",
      python:"Generator",
    }
  }
  
  render(){
    return (
      <>

        <Intro
          name={this.apple.name}
          DOB={this.apple.DOB}
          Email={this.apple.Email}
          address={this.apple.address}
          phone={this.apple.Phone} />

        <Qualification
          school={this.apple.school}
          cgpa={this.apple.cgpa}
          ug={this.apple.ug}
          percentage={this.apple.percentage}
          pg={this.apple.pg} 
          cgpapg={this.apple.cgpapg}/>

        <Projects
          web={this.apple.web}
          python={this.apple.python}/>
      </>
    );
  }
}


export default App;