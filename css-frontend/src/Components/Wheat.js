import axios from "axios";
import React, { Component } from "react";
import WheatEditor from './WheatEditor'

class Wheat extends Component {
    constructor(){
        super();
    }

    state = {LicensePlateEdit:false,
            waybillNumberEdit:false,
            waybillQuantityEdit: false,
            intakePlaceEdit: false,
            supplierEdit: false,
            moistureEdit: false,
            twEdit: false,
            foreignMatterEdit:false,
            proteinEdit:false,
            glutenEdit:false,
            button: false
            }

    req = {}

    LicenseClickHandler = () => {
        this.setState({LicensePlateEdit: true,
                        button: true})
    }

    waybillNumberClickHandler = () => {
        this.setState({waybillNumberEdit: true,
                        button: true})
    }
    waybillQuantityClickHandler = () => {
        this.setState({waybillQuantityEdit: true,
                        button: true})
    }
    intakePlaceClickHandler = () => {
        this.setState({intakePlaceEdit: true,
                        button: true})
    }
    supplierClickHandler = () => {
        this.setState({supplierEdit: true,
                        button: true})
    }
    moistureClickHandler = () => {
        this.setState({moistureEdit: true,
                        button: true})
    }
    twClickHandler = () => {
        this.setState({twEdit: true,
                        button: true})
    }
    foreignMatterClickHandler = () => {
        this.setState({foreignMatterEdit: true,
                        button: true})
    }
    ProteinClickHandler = () => {
        this.setState({proteinEdit: true,
                        button: true})
    }
    GlutenClickHandler = () => {
        this.setState({glutenEdit: true,
                        button: true})
    }

    licensePlateHandleChange = (event) =>{
        this.req.licensePlate = event.target.value;
    }
    waybillNumberHandleChange = (event) =>{
        this.req.waybillNumber = event.target.value;
    }
    waybillQuantityHandleChange = (event) =>{
        this.req.waybillQuantity = Number(event.target.value);
    }
    intakePlaceHandleChange = (event) =>{
        this.req.intakePlace = event.target.value;
    }
    supplierHandleChange = (event) =>{
        this.req.supplier = event.target.value;
    }
    moistureHandleChange = (event) =>{
        this.req.moisture = Number(event.target.value)/100;
    }
    twHandleChange = (event) =>{
        this.req.tw = Number(event.target.value);
    }
    foreignMatterHandleChange = (event) =>{
        this.req.foreignMatter = Number(event.target.value)/100;
    }
    proteinHandleChange = (event) =>{
        this.req.protein = Number(event.target.value)/100;
    }
    glutenHandleChange = (event) =>{
        this.req.gluten = Number(event.target.value)/100;
    }

    submission = () =>{
        this.setState({LicensePlateEdit:false,
            waybillNumberEdit:false,
            waybillQuantityEdit: false,
            intakePlaceEdit: false,
            supplierEdit: false,
            moistureEdit: false,
            twEdit: false,
            foreignMatterEdit:false,
            proteinEdit:false,
            glutenEdit:false,
            button: false})

        console.log(this.req)
        axios.put('/api/wheat',this.req)
    }

    deletion = () =>{

        this.setState({LicensePlateEdit:false,
            waybillNumberEdit:false,
            waybillQuantityEdit: false,
            intakePlaceEdit: false,
            supplierEdit: false,
            moistureEdit: false,
            twEdit: false,
            foreignMatterEdit:false,
            proteinEdit:false,
            glutenEdit:false,
            button: false})

            axios.delete('/api/wheat?id='+this.req.id)
            //this.props.update();
            
    }






    render(){
        this.req = this.props.delivery
        return(
            <tr>
                <td className="date" >{this.props.delivery.arrived}</td>
                <td className="license" onClick={this.LicenseClickHandler}>{this.state.LicensePlateEdit? <input type={"text"} onChange={this.licensePlateHandleChange} className="tableInput"/> : this.props.delivery.licensePlate}</td>
                <td className="waybillN" onClick={this.waybillNumberClickHandler}>{this.state.waybillNumberEdit ? <input type={"text"} onChange={this.waybillNumberHandleChange} className="tableInput"/> : this.props.delivery.waybillNumber}</td>
                <td className="waybillQ" onClick={this.waybillQuantityClickHandler}>{this.state.waybillQuantityEdit? <input type={"text"} onChange={this.waybillQuantityHandleChange} className="tableInput"/> : this.props.delivery.waybillQuantity.toFixed(0)}</td>
                <td className="intakePlace" onClick={this.intakePlaceClickHandler}>{this.state.intakePlaceEdit? <input type={"text"} onChange={this.intakePlaceHandleChange} className="tableInput"/> : this.props.delivery.intakePlace}</td>
                <td className="supplier" onClick={this.supplierClickHandler}>{this.state.supplierEdit? <input type={"text"} onChange={this.supplierHandleChange} className="tableInput"/> : this.props.delivery.supplier}</td>
                <td className="moisture" onClick={this.moistureClickHandler}>{this.state.moistureEdit? <input type={"text"} onChange={this.moistureHandleChange} className="tableInput"/> : (this.props.delivery.moisture * 100).toFixed(2)}</td>
                <td className="tw" onClick={this.twClickHandler}>{this.state.twEdit? <input type={"text"} onChange={this.twHandleChange} className="tableInput"/> : this.props.delivery.tw.toFixed(2)}</td>
                <td className="foreignMatter" onClick={this.foreignMatterClickHandler}>{this.state.foreignMatterEdit? <input type={"text"} onChange={this.foreignMatterHandleChange} className="tableInput"/> :(this.props.delivery.foreignMatter * 100).toFixed(2)}</td>
                <td className="protein" onClick={this.ProteinClickHandler}>{this.state.proteinEdit? <input type={"text"} onChange={this.proteinHandleChange} className="tableInput"/> : (this.props.delivery.protein * 100).toFixed(2)}</td>
                <td className="gluten" onClick={this.GlutenClickHandler}>{this.state.glutenEdit? <input type={"text"} onChange={this.glutenHandleChange} className="tableInput"/> : (this.props.delivery.gluten * 100).toFixed(2)}</td>
                {this.state.button ? <button onClick={this.submission}>Edit!</button> : null}
                {this.state.button ? <button onClick={this.deletion}>Delete!</button> : null}
            </tr>
        )
    }
}

export default Wheat;