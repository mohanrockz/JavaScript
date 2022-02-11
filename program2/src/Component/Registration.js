import React, { Component } from 'react';


class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            address:"",
            age:"",
            results:""
        }
    }

    Changename=(event) => {
        this.setState(() => ({
            name: event.target.value
        }))
    }

    ChangeAddress= (event) => {
        this.setState(() => ({
            address: event.target.value
        }))
    }

    ChangeAge=(event) => {
         this.setState(() => ({
             age: event.target.value
         }))
     }
     
     handleButton= (event) =>{
         const result ={
         name: this.state.name,
         address: this.state.address,
         age: this.state.age

         }
         this.setState(() => ({
             results: result
         }))
     }
    render(){
        return(
            <React.Fragment>
            <div className="Register">
                <div>
                    <input type="text" value={this.state.name} placeholder="enter your name" onChange={this.Changename} />

                </div>
                <div>
                    <input type="text" value={this.state.address} placeholder="enter your address" onChange={this.ChangeAddress} />

                </div>
                <div>
                    <input type="text" value={this.state.age} placeholder="enter your age" onChange={this.ChangeAge} />

                </div>

                <div>
                    <button onClick={this.handleButton}>Click</button>
                </div>

            
         <div>
            Name={this.state.results.name}
         </div>
         <div>
            Address={this.state.results.address}
         </div>
         <div>
            Age={this.state.results.age}
         </div>
</div>

            </React.Fragment>
        );
    }



}
export default Registration;