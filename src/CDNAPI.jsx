import React from 'react';
import ReactDOM from 'react-dom';

function constructApiUrl(query){
    const finalQuery = query;
    if(!finalQuery){
        return `https://api.cdnjs.com/libraries/${encodeURIComponent(finalQuery)}`;
        
    }
    
    return `https://api.cdnjs.com/libraries/${encodeURIComponent(finalQuery)}`;
    
}


export default class CDNAPI extends React.Component{
    constructor(){
        super();
        this.state={
            isLoadingx:false,
            datax:null,
            query:'',
        };

    }

    handleQueryChange(e){
        const newQuery=e.target.value;
        this.setState({query:newQuery});
       
        this.delayLoadData=setTimeout(()=>{
            this.fetchDatax(newQuery);
        },500);
       
       
    }
    handleSubmit(e){
        //const myquery=e.target.value;
        
        //this.setState({query:myquery});
        e.preventDefault();
        console.log('print log:'+this.state.query);
        //this.fetchDatax(myquery);
    }

    renderDatax(){
       

       


        const {author,name,filename,version,license,assets=[]}=this.state.datax;
        return(
            <div>

                <form className='form-inline' onSubmit={this.handleSubmit.bind(this)}> 

                    <div className='form-group'>
                        <label for='exampleInputEmail2'>Search</label>
                        <input value={this.state.query} onChange={this.handleQueryChange.bind(this)} type="text" className='form-control' placeholder='search library'/>
                    </div>
                    <button disabled={this.state.isLoadingx} type='submit' className='btn btn-warning'>send invitation</button>
                </form>
                {this.state.isLoadingx&&<div>Loadingx...</div>}
                {!this.state.isLoadingx&&this.state.datax && (
                    <div>

                    <label>Author</label>
                    <div>{author}</div>
                    <label>Name_X</label>
                    <div>{name}</div>
                    <label>Version_X</label>
                    <div>{version}</div>

                    <label>Liscence</label>
                    <div>{license}</div>
                
                    <label>URL_X</label>
                    <div>{filename}</div>
                    <label>Assets_X</label>
                    <div>
                    {assets.map(x=>(<div key={x.version}>{x.version}</div>))}
                    </div>
                    </div>
                )}
            </div>
        );
    }

    

    componentDidMount(){
        this.fetchDatax();
    }

    fetchDatax(query){
        
        const apiUrlx=constructApiUrl(query);
        if(!apiUrlx){
            return;
            
        }
        
        this.setState({isLoadingx:true});
        $.getJSON(apiUrlx,(response_x)=>{
            this.setState({isLoadingx:false,datax:response_x});
        });
    }


    render(){
        return(
        <div className='container' style={{margin:'85px auto'}}>
            <h3>CDNAPI info</h3>
            {this.state.isLoadingx&&<div>Fetching datax...</div>}
            {this.state.datax&&this.renderDatax()}


            <button 
            
            className='btn btn-success'
            disabled={this.state.isLoadingx}
            onClick={this.componentDidMount.bind(this)}
            >
            refresh
            </button>
        </div>
        );
    }   
}