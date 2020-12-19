import React,{Component} from 'react';

class Maman extends Component{


state={
messageMaman:null,
messageToto:null
}

mamanOrder=(message)=>{
    
    this.setState({
        messageMaman:message    
    })
        
    

    

}
render(){

    return (
        <div>
            <h1>Maman</h1>
            <button onClick={()=>this.mamanOrder("clean your room")}>Order</button>
            <hr/>
    <p>{this.state.messageMaman}</p>
        </div>
    )    
}


}
export default Maman