import React, { Component } from "react";


class WheatStats extends Component{
    constructor(){
        super();
    }



    render(){
        console.log("aaa",this.props.stat)
        return (<div>
            <p>{this.props.stat.name}</p>
            <p>{this.props.stat.count}</p>
            <p>{this.props.stat.amount}</p>
        </div>)
    }


}

export default WheatStats