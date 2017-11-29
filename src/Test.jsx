import React from 'react';
import ReactDOM from 'react-dom';


const numbers=[1,2,3,4,5];


const numbers_e= numbers.map(num=>
{
        return <h3>{num}</h3>
});

function List(){
    return(
        <div>
            {numbers_e}
        </div>

    );
        
    
}


ReactDOM.render(
    <List />,
    document.getElementById('root4')
);




export default class Myform extends React.Component{
    constructor(){
        super();
        this.state={username:'',email:'',password:''};
    }


    handleInputChange(e){
        this.setState({e:target.name,e:target.value});
    }
    handleSubmit(e){
        ///e.preventDefault();

    }


    render(){ 
        return(
            <form >
                <div className="row">
                    username:
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange.bind(this)}  />
                </div>
                <div className="row">
                    email:  
                    <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange.bind(this)}  />
                </div>
                <div className="row">
                    password:
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange.bind(this)}  />
                </div>
                
                <div className="row">

                    <button type="submit" value="submit">submit</button>
                </div>
                
            </form>

        );
    }
}


ReactDOM.render(
    <div>
        <Myform />
    </div>,

    document.getElementById('root5')


);