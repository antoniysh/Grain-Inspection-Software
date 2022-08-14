import React, { Component } from "react";

class Sfs extends Component{
    constructor(){
        super();
    }

    state = {}

    render(){
        //console.log("SFS")
        return(
        <tr>
            <td className="date">{this.props.delivery.arrived}</td>
            <td className="license">{this.props.delivery.licensePlate}</td>
            <td className="waybillN">{this.props.delivery.waybillNumber}</td>
            <td className="waybillQ">{this.props.delivery.waybillQuantity.toFixed(0)}</td>
            <td className="intakePlace">{this.props.delivery.intakePlace}</td>
            <td className="supplier">{this.props.delivery.supplier}</td>
            <td className="moisture">{(this.props.delivery.moisture * 100).toFixed(2)}</td>
            <td className="tw">{(this.props.delivery.tw).toFixed(2)}</td>
            <td className="foreignMatter">{(this.props.delivery.foreignMatter * 100).toFixed(2)}</td>
            <td className="oil">{(this.props.delivery.oil * 100).toFixed(2)}</td>
         </tr>)
    }
}


export default Sfs;