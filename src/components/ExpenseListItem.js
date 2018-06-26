import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = (props) => (
    <div>
       <h2>{props.description}</h2>
       <p>
         { numeral(props.amount).format('$0,0.00')} 
        - 
         {moment(props.createdAt).format('MMMM DO, YYYY')}
        </p>
    
       <div>
        <Link to={"/edit/" + props.id}>Edit</Link>
        </div>
    </div>
)


export default ExpenseListItem

