import React, { Component } from 'react';

const initialState={
    addedFunds: 0
}
class FundsForm extends Component {
    state=initialState

    amountChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitAddition = (event) => {
        event.preventDefault()
        this.props.addToCustomerBudget(parseInt(this.state.addedFunds))
        this.setState(initialState)
    }

    render() {
        return (
            <form onSubmit={this.submitAddition}>
                <label>Amount: 
                    <input type="number" name='addedFunds' value={this.state.addedFunds} placeholder="Enter Amount Here" onChange={this.amountChange}/>
                </label>
                <button type='submit' value='Submit'>Add Funds</button>
            </form>
        )
    }

}

export default FundsForm