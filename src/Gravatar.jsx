import React from 'react';
import gravatarUrl from 'gravatar-url';
import './style/main.css'


function Gravatar({email,name}){
    return(
        
        <div> 
            
            <img 
            src={gravatarUrl(email,name)}
            className="jr_gravartar img-circle"
            style={{width:name,height:name}}
            alt="avatar"
            />  
            {gravatarUrl(email)} 
        </div>
    );
        
   

}


export default Gravatar;