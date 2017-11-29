/*import React from 'react';
import ReactDOM from 'react-dom';

function Greeting(props) {

  return (
    <div className="container">
      <h1>Hello, {props.name}! You are {props.age}</h1>
      <h2>It is{new Date().toLocaleTimeString()}</h2>
    </div>
  );
}
function App(){
  return (
    <div>
      {Greeting}
    </div>
  );

}

function displaytime(){
  ReactDOM.render(<Greeting name="yang" age="27"/>, document.getElementById('root'));

}
setInterval(displaytime,1000);


*/

import React from 'react';
import gravatarUrl from 'gravatar-url';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import Test from './Test';

import WeatherAPI from './WeatherAPI';
import CDNAPI from './CDNAPI';



const p1="admin@cretve.com";
const name="yang";

/*
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    return this.state.value
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



ReactDOM.render(
  <NameForm />,
  document.getElementById('root0')
);
var cityname=handleSubmit();
*/

ReactDOM.render(


<Clock city='sydney' />,

document.getElementById('root0')

);
ReactDOM.render(
  
  
  <Clock city='seoul' />,
  
  document.getElementById('root')
  
  );

ReactDOM.render(
    
    
    <Clock city='new york' />,
    
    document.getElementById('root2')
    
);

ReactDOM.render(
      
      
      <Clock city='london' />,
      
      document.getElementById('root3')
      
);



ReactDOM.render(
  <WeatherAPI />,
  document.getElementById('root5')

);
ReactDOM.render(
  <CDNAPI />,
  document.getElementById('root6')

);

