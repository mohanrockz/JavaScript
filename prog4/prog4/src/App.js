import React from 'react';
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import Book from './components/Book';
import AddBook from './components/AddBook';

class App extends React.Component {
 render(){
   return(
    <BrowserRouter>
      <Switch>
        <Route  path="/" component={Book} exact/>
        <Route path="/addbook" component={AddBook} exact/>
      </Switch>
    </BrowserRouter>
   );
 }
}
export default App;
