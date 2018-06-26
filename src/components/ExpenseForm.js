import React from 'react'
import moment from 'moment'
import { addExpense } from '../actions/expenses'

import { SingleDatePicker } from 'react-dates'




export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id:  props.expense ? props.expense.id :'',
            description:props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note :'',
            amount: props.expense ? parseFloat(props.expense.amount) :1,
            createdAt:props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: undefined
           
        }
       
    }
    


    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        let amount = e.target.value
       
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) this.setState(() => ({ amount }))  
    }     
    addExpense = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) this.setState(() => ({error: 'Please provide description and amount'}))
        else{
            this.setState(() => ({error: undefined}))
        this.props.onSubmit({
            description: this.state.description,
            note: this.state.note,
            amount: parseFloat(this.state.amount),
            createdAt : this.state.createdAt.format('x')},
            this.state.id)
        }


    }        
            
        
    
    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState(() => ({createdAt}))
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }
    render(){
        return (
            <div>
                {!!this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addExpense}>
                    <input
                        type="text"
                        placeholder = "Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}/>
                    <input
                        type="text"
                        placeholder = "Amount"
                        onChange = {this.onAmountChange}
                        value= {this.state.amount}
                        />
                        <SingleDatePicker
                        date = {this.state.createdAt} 
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        />
                    <textarea
                        placeholder="Add a note for your expense"
                        onChange={this.onNoteChange}
                        value = {this.state.note}></textarea>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}

