import React from 'react';
import ReactDOM from 'react-dom';



export default class WeatherAPI extends React.Component{
    constructor(){
        super();
        this.state={
            isLoading:false,
            data:null,
        };
     
    }

    renderData(){
        const {data}=this.state;
        return(
            <div>
                <label>Temperature</label>
                <div>{data.current.temp_c}</div>
                <label>Condition</label>
                <div>{data.current.condition.text}</div>
                <img src={data.current.condition.icon} />

            </div>
        );

    }


    fetchData(){
        const apiUrl='https://api.apixu.com/v1/current.json?key=1eb8b1de06614af3a3423418171609&q=Sydney';
        this.setState({isLoading:true,data:null});
        $.getJSON(apiUrl,(response)=>{
            this.setState({isLoading:false,data:response});
        });
    }


    render(){
        return(
            <div className="container">
                <h3>Paris weather</h3>
                {this.state.isLoading&&<div>Fetching data...</div>}
                {this.state.data&&this.renderData()}

                <button
                className="btn btn-primary"
                disabled={this.state.isLoading}
                onClick={this.fetchData.bind(this)}
                >
                refresh
                </button>

            </div>
        );
    }

}