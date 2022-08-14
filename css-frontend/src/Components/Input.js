import React, { Component } from "react";
import WheatInput from "./WheatInput";
import BarleyInput from "./BarleyInput";
import SfsInput from "./SfsInput";

class Input extends Component{
    constructor(){
        super()
    }

    state = {}


    render(){
        if(this.props.order.stock.localeCompare("wheat") == 0){
            return (<WheatInput order = {this.props.order} />)
        }else if(this.props.order.stock.localeCompare("barley") == 0){
            return(<BarleyInput order = {this.props.order} />)
        }else if(this.props.order.stock.localeCompare("sfs") == 0){
            return(<SfsInput order = {this.props.order} />)
        }else{
            return (<div></div>)
        }
    }
}

export default Input;