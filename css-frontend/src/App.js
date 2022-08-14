import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Selector from './Components/Selector';
import Wheat from './Components/Wheat';
import Table from './Components/Table';
import Input from './Components/Input';
import Statistics from './Components/Statistics';



class App extends Component{

  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this)
  }
  state = { stock: "",
            workingOrder: ""};

  async componentDidMount(){
    /*const response = await fetch('/api/wheat')
    const body = await response.json();
    this.setState({deliveries: body})*/
  }

  handleChange(q){
    this.setState(q)
  }


  render(){
    //const deliveries = this.state
    let z = 5

    return(
      <div className='App'>
        <header className='App-header'>
          <Selector handler = {this.handleChange} />
          <div className='App-intro'>
            {/*this.state.deliveries.map(delivery=> <div key={delivery.id}>{delivery.arrived}  {delivery.licensePlate} {delivery.order_id}</div>)*/}
            <Input order = {this.state}/>
            <Table order = {this.state} />
          </div>
        </header>
      </div>
    )
  }
}



export default App;
