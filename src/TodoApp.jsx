import React from 'react';
import ReactDOM from 'react-dom';


export default class TodoApp extends  React.Component{
    constructor(){
        super();
        this.state={username:'',email:'',password:''};
    }

    handleInputChange(params) {
       this.setState({e:target.name,e:target.value});
   }

   handleSubmit(){
       e.preventDefault();

    
   }

    render(){
        return (
            <form >
                <div>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange.bind(this)}/>
                </div>
            </form>


        );

    }


}