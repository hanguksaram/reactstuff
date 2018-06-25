import React from 'react'
import {Link} from 'react-router-dom'

const ExpenseListItem = (props) => (
    <div>
       <h2>{props.description}</h2>
       <p>{props.amount} - {props.createdAt}</p>
      
       <div>
        <Link to={"/edit/" + props.id}>Edit</Link>
        </div>
    </div>
)


export default ExpenseListItem

