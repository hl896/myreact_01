import React from 'react';
import  './styles/clock.css';
import moment from 'moment-timezone';
import TimeSquare from './TimeSquare.jsx'; 
import CityToTimezoneMap from './CityToTimezoneMap';

function convertCityToTimezone(city){
    const timezone =CityToTimezoneMap[city];
    if(!timezone){
        throw new Error(`Didn't recogonize the city:${city}`);
    }
    return timezone;
}



/// #e27355 dark #fb7d5b light
export default class Clock extends React.Component{
    constructor(){
        super();
        this.state={time:new Date()};
    }

    updateTime(){
        
        this.timeID=setInterval(()=>this.setState({time:new Date()}),1000);    
    }

    componentDidMount(){
       //super.componentDidMount();
       this.updateTime();
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    

    render(){
        //this.updateTime();
        const {time}= this.state;
        const {city}=this.props;
        const timezone=convertCityToTimezone(city);

        const time_Beijing=moment.tz(timezone);

        const hours=time_Beijing.format('HH');
        const minutes=time_Beijing.format('mm');
        const seconds=time_Beijing.format('ss');

        return(
            <div>
                <div className="jr-clock">
                <div className="jr-clock_date">
                    {time_Beijing.format('ddd MMM DD YYYY')}
                </div>
                
                <div className="jr-clock_time">
                    <TimeSquare number={hours} />
                    <span> : </span>
                    <TimeSquare number={minutes} />
                    <span> : </span>
                    <TimeSquare number={seconds} />
                </div>
                </div>

               
            </div>
            
        );

    

       
            
        
    }


}