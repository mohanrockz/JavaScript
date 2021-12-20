import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Book extends React.Component {

constructor(props) {
    super(props);

    this.state={
        books:[]
    };
}

componentDidMount=()=>{
    this.getBooks();
}

getBooks() {
    axios.get('http://localhost:8000/books')
    .then((response)=>{
        let data=response.data.books;
        this.setState(()=>({
            books:data
        }))
    })
    .catch(()=>{console.log("Error")})
}

delete(id){
    axios.delete(`http://localhost:8000/books/${id}`)
    .then(()=>{
       this.getBooks();
    })
    .catch(()=>{console.log("Error")})
}

render(){
    return(
        <React.Fragment>
            <Link to="/addbook">CLICK TO ADD A BOOK</Link>
            <table border="2" cellspacing="2" cellpadding="">
                <thead>
                    <th>SR NO</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                </thead>
                <tbody>
                    {
                        this.state.books.map((data,index)=>{
                            return(
                                <tr key={index}>
                                    

                                    <td>{index+1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.price}</td>
                                    <td><span onClick={()=>{this.delete(data.name)}}>DELETE</span></td>                                
                                </tr>    
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    );
}

}

export default Book;