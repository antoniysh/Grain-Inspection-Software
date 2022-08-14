import React from 'react'
import axios from 'axios'
//import Dropdown from './Dropdown'
import './Dropdown.css'

class Selector extends React.Component{
	constructor(){
		super()
		this.state = {stock: "Stock",
					  orders: [],
					  workingOrder:"Order"}
	}

	componentDidMount(){
	}

	render(){
		return(
			<div>
				<div class="dropdown">
  					<button class="dropbtn">{this.state.stock.toLocaleUpperCase()}</button>
  					<div class="dropdown-content">
    					<a href="#" onClick={()=>{
    						axios.get('http://localhost:8080/api/orders')
    						.then(res=>{
    							let q = {stock: "wheat",
    									 orders: res.data}
				
                                let result = q.orders.filter(order => order.stock == q.stock)
                                q.orders = result
    							this.setState(q)
                    
    						})}}>Wheat</a>
    					<a href="#" onClick={()=>{
    						axios.get('http://localhost:8080/api/orders')
    						.then(res=>{
    							let q = {stock: "barley",
    									 orders: res.data}
                                let result = q.orders.filter(order => order.stock == q.stock)
                                q.orders = result
    							this.setState(q)
    						})}}>Barley</a>
    					<a href="#" onClick={()=>{
    						axios.get('http://localhost:8080/api/orders')
    						.then(res=>{
    							let q = {stock: "sfs",
    									 orders: res.data}
                                let result = q.orders.filter(order => order.stock == q.stock)
                                q.orders = result
    							this.setState(q)
    						})}}>SFS</a>
  					</div>
				</div>




				<div class="dropdown">
  					<button class="dropbtn">{this.state.workingOrder}</button>
 					 <div class="dropdown-content">
                     {this.state.orders.map( order => <a href="#" onClick= {()=>{
                        let z = this.state
                        z.workingOrder = order.id
                        this.setState(z)
                        this.props.handler(z)
                     }}>{order.id}</a>)}
  					</div>
				</div>
			</div>
			)
	}

}

export default Selector

