import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import FundsForm from './components/FundsForm.js';
// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis: [],
    emptyPlates: [],
    sushiIndex: 0,
    customerBudget: 80,
    formToggle: false
  }

  componentDidMount() {
    fetch("http://localhost:3000/sushis")
    .then(resp=>resp.json())
    .then(sushiData=>this.setState({sushis: sushiData}))
  }

  purchaseSushi = (sushi) => {
    if (this.state.customerBudget < sushi.price) {
      alert("Transaction declined. Please add to the customer's available funds.")
    } else {
        if (sushi.img_url != "") {
          sushi.img_url = ""
          let newSushis=this.state.sushis.map(sushiE => {
            if (sushiE.id === sushi.id) {
              return sushi
            } 
              return sushiE
          })
          
          this.setState(prevState => {
            return { 
              sushis: newSushis,
              emptyPlates: [...this.state.emptyPlates, sushi],
              customerBudget: prevState.customerBudget - sushi.price
            }
          })
        }
       
    }
  }

  addSushiToBelt = () => {
    this.setState(prevState => {
      if (prevState.sushiIndex + 4 > this.state.sushis.length - 1) {
        return {sushiIndex: 0}
      } else {
        return {sushiIndex: prevState.sushiIndex + 4}
      }
    })  
  }

  toggleFundsForm = () => {
    this.setState(prevState => {
      return {formToggle: !prevState.formToggle}
    })
  }
  
  addToCustomerBudget = (newFunds) => {
    this.setState(prevState => {
      return {customerBudget: prevState.customerBudget + newFunds}
    })
  }

  // {this.state.formToggle 
  //   ? <React.Fragment>
  //     <button onClick={this.toggleFundsForm}>Hide Funds Form</button>
  //     <FundsForm addToCustomerBudget={this.addToCustomerBudget}/>
  //     </React.Fragment>
  //   : <button onClick={this.toggleFundsForm}>Add Funds</button>
  // }

  render() {
    return (
      <div className="app">
        <FundsForm addToCustomerBudget={this.addToCustomerBudget}/>
        <SushiContainer sushiIndex={this.state.sushiIndex} sushis={this.state.sushis} addSushiToBelt={this.addSushiToBelt} purchaseSushi={this.purchaseSushi}/>
        <Table emptyPlates={this.state.emptyPlates} customerBudget={this.state.customerBudget}/>
      </div>
    );
  }
}

export default App;