import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddBook extends React.Component {
constructor(props){
    super(props);
    this.state={
        name:"",
        price:""
    }
}

handle=(event,id)=>{
    let d=event.target.value;
    this.setState(()=>({
        [`${id}`]:d
    }))
}

submit(){
    let data={
        name:this.state.name,
        price:this.state.price
    }
    axios.post('http://localhost:8000/books/',data)
    .then(()=>{
        this.state.history.push('/');
    }).catch(()=>{
        console.log('MAA CHUDI')
    })
}

render(){
    return(
        <React.Fragment>
            <div>
                ENTER NAME OF BOOK
                <input type="text" value={this.state.name} onChange={(event)=>{this.handle(event,"name")}}/>
            </div>
            <div>
                ENTER PRICE OF BOOK
                <input type="text" value={this.state.price} onChange={(event)=>{this.handle(event,"price")}}/>
            </div>
            
            <div>
                <button onClick={()=> this.submit()}>ADD</button>
            </div>
            <Link to='/'>Back</Link>
        </React.Fragment>
        
    );
}


}

export default AddBook;