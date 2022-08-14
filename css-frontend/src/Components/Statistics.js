import axios from "axios";
import React, { Component } from "react";
import WheatStats from "./WheatStats";

class Statistics extends Component{
    constructor(){
        super();
    }

    state = {}


   async componentDidMount(){

       axios.get('/api/statistics/wheat?id=' + this.props.order.workingOrder)
        .then((response) => { const data = response.data
                               this.setState({data}) })
    }


    render(){
        console.log(this.state.data)
        return(<div className="stats">
            {this.state.data ? this.state.data.map(stat => <WheatStats stat = {stat}/>) : null}
        </div>)
    }
}


export default Statistics;