import React, { Component } from "react";
import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json'

class SfsInput extends Component{
    constructor(){
        super();
    }

    state = {licensePlate:"",
            orderId:"",
            waybillNumber:"",
            waybillQuantity:"",
            intakePlace:"",
            supplier:"",
            moisture:"",
            tw:"",
            foreignMatter:"",
            oil: "",
            accepted:"true",
            remarks: "",
            insectsPerKilo:0,
            netScaleQuantity:null}

    initialState = {licensePlate:"",
                    orderId:"",
                    waybillNumber:"",
                    waybillQuantity:"",
                    intakePlace:"",
                    supplier:"",
                    moisture:"",
                    tw:"",
                    foreignMatter:"",
                    oil: "",
                    accepted:"true",
                    remarks: "",
                    insectsPerKilo:0,
                    netScaleQuantity:null}

    submission = (event) => {
        event.preventDefault()
        const req = {
            licensePlate: this.state.licensePlate,
            orderId: this.state.orderId,
            waybillNumber: this.state.waybillNumber,
            waybillQuantity: Number(this.state.waybillQuantity),
            intakePlace: this.state.intakePlace,
            supplier: this.state.supplier,
            moisture: Number(this.state.moisture)/100,
            tw: Number(this.state.tw),
            foreignMatter: Number(this.state.foreignMatter)/100,
            oil: Number(this.state.oil)/100,
            accepted: this.state.accepted,
            return: this.state.remarks,
            insectsPerKilo:this.state.insectsPerKilo,
            netScaleQuantity: this.state.netScaleQuantity
        }
        req.orderId = this.props.order.workingOrder
        console.log(this.state)
        console.log(req)
        axios.post('/api/sfs', JSON.stringify(req))
        //console.log(this.initialState)
        this.setState(this.initialState)
    }

    updateSupplier = (event) =>{
        this.setState({supplier: event.target.value})
    }

    updateLicensePlate = (event) =>{
        this.setState({licensePlate: event.target.value})
    }
    updateWaybillNumber = (event) =>{
        this.setState({waybillNumber: event.target.value})
    }
    updateWaybillQuantity = (event) =>{
        this.setState({waybillQuantity: event.target.value})
    }
    updateIntakePlace = (event) =>{
        this.setState({intakePlace: event.target.value})
    }
    updateMoisture = (event) =>{
        this.setState({moisture: event.target.value})
    }
    updateTW = (event) =>{
        this.setState({tw: event.target.value})
    }
    updateForeignMatter = (event) =>{
        this.setState({foreignMatter: event.target.value})
    }
    updateOil = (event) =>{
       this.setState({oil: event.target.value})
   }
    updateAccepted = (event) =>{
        this.setState({accepted: event.target.value})
    }
    updateOrderId = () => {
        this.setState({orderId: this.props.order.workingOrder})
    }




    render(){
        return(
            <form onSubmit={this.submission}>
                <label>License Plate <input type={"text"} name="licensePlate" onChange={this.updateLicensePlate} value={this.state.licensePlate}/></label>
                <label>Waybill Number <input type={"text"} name="waybillNumber" onChange={this.updateWaybillNumber} value={this.state.waybillNumber}/></label>
                <label>Waybill Quantity <input type={"text"} name="waybillQuantity" onChange={this.updateWaybillQuantity} value={this.state.waybillQuantity}/></label>
                <label>Intake Place <input type={"text"} name="intakePlace" onChange={this.updateIntakePlace} value={this.state.intakePlace}/></label>
                <label>Supplier <input type={"text"} name="supplier" onChange={this.updateSupplier} value={this.state.supplier}/></label>
                <label>Moisture <input type={"text"} name="moisture" onChange={this.updateMoisture} value={this.state.moisture}/></label>
                <label>T.W. <input type={"text"} name="tw" onChange={this.updateTW} value={this.state.tw}/></label>
                <label>Foreign Matter <input type={"text"} name="foreignMatter" onChange={this.updateForeignMatter} value={this.state.foreignMatter}/></label>
                <label>Oil <input type={"text"} name="oil" onChange={this.updateOil} value={this.state.oil}/></label>
                <label>Accepted <select name="accepted" onChange={this.updateAccepted}>
                    <option value = "yes">YES</option>
                    <option value = "no">NO</option>
                    </select></label>
                <input type={"submit"} onClick={this.submission}/>
            </form>
        )
    }
}

export default SfsInput;