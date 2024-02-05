import React from 'react'
import ExpenseItem from './ExpenseItem'
import {Box, Typography } from '@mui/material'


const ExpensesList = () => {
  const expenseItems = [
    {id:123451,name:"Shopping",spent:343},
    {id:123452,name:"Holiday",spent:500},
    {id:123453,name:"Transportation",spent:63},
    {id:123454,name:"Fuel",spent:240},
    {id:123455,name:"Child Care",spent:150}
  ]
  return (
    <Box>
      <h2>Expenses</h2>
      <Box>
        {
          expenseItems.map((item)=>( 
            <ExpenseItem key={item.id} name={item.name} spent={item.spent} />

          ))
        }
      </Box>
    </Box>
  )
}

export default ExpensesList