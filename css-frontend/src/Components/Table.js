import React, { Component } from "react";
import Wheat from "./Wheat";
import Barley from "./Barley";
import Sfs from "./Sfs";
import { Button } from "reactstrap";

class Table extends Component{
     constructor(){
         super()
     }

     state = {deliveries: [],
                page: 0,
                totalPages: 0,
                refresh: false}
    

    async componentWillReceiveProps (){
        this.setState({page:0})
    }

    update = () =>{
        this.setState({refresh: true})
    }


    async componentDidUpdate(prevProps){
       // console.log(this.props.order)
      /* if(this.props.order != null){
           if(prevProps.order != this.props.order){
               if(this.props.order.stock.localeCompare("wheat")){
                   const response = await fetch('/api/wheat?id='+this.props.order.workingOrder)
                   const body = await response.json()
                   this.setState({deliveries: body})
               }
               if(this.props.order.stock.localeCompare("barley")){
                   const response = await fetch('/api/barley?id='+this.props.order.workingOrder)
                   const body = await response.json()
                   this.setState({deliveries: body})
               }
               if(this.props.order.stock.localeCompare("sfs")){
                   const response = await fetch('/api/sfs?id='+this.props.order.workingOrder)
                   const body = await response.json()
                   this.setState({deliveries: body})
               }
           }
       }*/
       //console.log(this.prevProps.order != this.props.order)
        if(prevProps.order != this.props.order || this.state.refresh == true){
            //console.log(this.prevProps.order != this.props.order)
            console.log(this.state.refresh == true)
            this.setState({page: 0})
            if(this.props.order != null){
                const response = await fetch('/api/' + this.props.order.stock + '?id=' +this.props.order.workingOrder +'&page='+this.state.page)
                 const body = await response.json()
                 this.setState({deliveries: body.content})
                 this.setState({totalPages: body.totalPages})
            }
            
        }
    }

    nextPage = async () => {
        /*if(this.state.page < this.state.totalPages){
        this.setState({page: this.state.page + 1})
        console.log('/api/' + this.props.order.stock + '?id=' +this.props.order.workingOrder +'&page='+this.state.page)
        const response = await fetch('/api/' + this.props.order.stock + '?id=' +this.props.order.workingOrder +'&page='+this.state.page)
        const body = await response.json()
        this.setState({deliveries: body.content})
        this.setState({totalPages: body.totalPages},()=> console.log(this.state))
        }*/
        //console.log(this.state.page + "    "  +  this.state.totalPages)
        if(this.state.page < this.state.totalPages - 1){
            this.setState({page: this.state.page + 1}, async () => {
                //console.log('/api/' + this.props.order.stock + '?id=' +this.props.order.workingOrder +'&page='+this.state.page)
                const response = await  fetch('/api/' + this.props.order.stock + '?id=' +this.props.order.workingOrder +'&page='+this.state.page)
                const body =  await response.json()
                this.setState({deliveries: body.content})
                this.setState({totalPages: body.totalPages})
            })
        }
    }

    prevPage = async () => {
        /*if(this.state.page  > 0){
        this.setState({page: this.state.page - 1})
        const response = await fetch('/api/' + this.props.order.stock + '?id=' +this.props.order.workingOrder +'&page='+this.state.page)
        const body = await response.json()
        this.setState({deliveries: body.content})
        this.setState({totalPages: body.totalPages})
        }*/
        if(this.state.page > 0){
            this.setState({page: this.state.page - 1}, async() => {
                const response = await fetch('/api/' + this.props.order.stock + '?id=' +this.props.order.workingOrder +'&page='+this.state.page)
                const body = await response.json()
                this.setState({deliveries: body.content,
                                totalPages: body.totalPages})
            })
        }
    }


     render(){
        // if(this.props.order.stock.localeCompare("wheat")){console.log("dumbshitz")}
        if(this.props.order.stock.localeCompare("wheat") == 0 && this.state.deliveries.length >= 1){
            return(<div className="tbll">
                <table>
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>License<br></br>Plate</th>
                        <th>Waybill<br></br>Number</th>
                        <th>Waybill<br></br>Quantity </th>
                        <th>Intake<br></br>Place</th>
                        <th>Supplier</th>
                        <th>Moisture</th>
                        <th>T.W.</th>
                        <th>Foreign<br></br>Matter</th>
                        <th>Protein</th>
                        <th>Gluten</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.deliveries.map(delivery => <Wheat delivery = {delivery} update = {this.update} />)}
                    </tbody>
                    <tfoot>
                        <tr><Button onClick={this.nextPage}>Next</Button> <Button onClick={this.prevPage}>Previuos</Button></tr>
                    </tfoot>
                    </table>
                    </div>)
        }else if(this.props.order.stock.localeCompare("barley") == 0 && this.state.deliveries.length >= 1){
            return(<div>
                <table>
                    <thead>
                        <th>Date</th>
                        <th>License<br></br>Plate</th>
                        <th>Waybill<br></br>Number</th>
                        <th>Waybill<br></br>Quantity </th>
                        <th>Intake<br></br>Place</th>
                        <th>Supplier</th>
                        <th>Moisture</th>
                        <th>T.W.</th>
                        <th>Foreign<br></br>Matter</th>
                    </thead>
                    <tbody>
                        {this.state.deliveries.map(delivery => <Barley delivery = {delivery} />)}
                    </tbody>
                    <tfoot>
                        <tr><Button onClick={this.nextPage}>Next</Button> <Button onClick={this.prevPage}>Previuos</Button></tr>
                    </tfoot>
                </table></div>)
        }else if(this.props.order.stock.localeCompare("sfs") == 0 && this.state.deliveries.length >= 1){
            return(<div>
                <table>
                    <thead>
                        <th>Date</th>
                        <th>License<br></br>Plate</th>
                        <th>Waybill<br></br>Number</th>
                        <th>Waybill<br></br>Quantity</th>
                        <th>Intake<br></br>Place</th>
                        <th>Supplier</th>
                        <th>Moisture</th>
                        <th>T.W.</th>
                        <th>Foreign<br></br>Matter</th>
                        <th>Oil</th>
                    </thead>
                    <tbody>
                        {this.state.deliveries.map(delivery => <Sfs delivery = {delivery} />)}
                    </tbody>
                    <tfoot>
                        <tr><Button onClick={this.nextPage}>Next</Button> <Button onClick={this.prevPage}>Previuos</Button></tr>
                    </tfoot>
                </table></div>)
        }else{return(<div></div>)}
     }
}

export default Table;