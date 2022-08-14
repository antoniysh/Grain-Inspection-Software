import React, { Component } from "react";
import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json'

class WheatInput extends Component{
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
            protein:"",
            gluten:"",
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
            protein:"",
            gluten:"",
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
            protein: Number(this.state.protein)/100,
            gluten: Number(this.state.gluten)/100,
            accepted: this.state.accepted,
            remarks: this.state.reamkers,
            insectsPerKilo: this.state.insectsPerKilo,
            netScaleQuantity: this.state.netScaleQuantity
        }
        this.setState(this.initialState)
        req.orderId = this.props.order.workingOrder
        axios.post('/api/wheat', JSON.stringify(req))
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
    updateProtein = (event) =>{
        this.setState({protein: event.target.value})
    }
    updateGluten = (event) =>{
        this.setState({gluten: event.target.value})
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
                <label><p>License Plate</p> <input type={"text"} name="licensePlate" onChange={this.updateLicensePlate} value={this.state.licensePlate}/></label>
                <label>Waybill Number <input type={"text"} name="waybillNumber" onChange={this.updateWaybillNumber} value={this.state.waybillNumber}/></label>
                <label>Waybill Quantity <input type={"text"} name="waybillQuantity" onChange={this.updateWaybillQuantity} value={this.state.waybillQuantity}/></label>
                <label>Intake Place <input type={"text"} name="intakePlace" onChange={this.updateIntakePlace} value={this.state.intakePlace}/></label>
                <label>Supplier <input type={"text"} name="supplier" onChange={this.updateSupplier} value={this.state.supplier}/></label>
                <label>Moisture <input type={"text"} name="moisture" onChange={this.updateMoisture} value={this.state.moisture}/></label>
                <label>T.W. <input type={"text"} name="tw" onChange={this.updateTW} value={this.state.tw}/></label>
                <label>Foreign Matter <input type={"text"} name="foreignMatter" onChange={this.updateForeignMatter} value={this.state.foreignMatter}/></label>
                <label>Protein <input type={"text"} name="protein" onChange={this.updateProtein} value={this.state.protein}/></label>
                <label>Gluten <input type={"text"} name="gluten" onChange={this.updateGluten} value={this.state.gluten}/></label>
                <label>Accepted <select name="accepted" onChange={this.updateAccepted}>
                    <option value = "yes">YES</option>
                    <option value = "no">NO</option>
                    </select></label>
                <input type={"submit"} onClick={this.submission}/>
            </form>
        )
    }
}

export default WheatInput;