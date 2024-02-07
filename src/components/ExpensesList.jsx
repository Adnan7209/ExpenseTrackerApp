import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import {Box, Typography } from '@mui/material'
import { AppContext } from './context/AppContext'


const ExpensesList = () => {
  const {expenses}= useContext(AppContext);
  const expenseItems = [
    {id:123451,name:"Shopping",expense:343},
    {id:123452,name:"Holiday",expense:500},
    {id:123453,name:"Transportation",expense:63},
    {id:123454,name:"Fuel",expense:240},
    {id:123455,name:"Child Care",expense:150}
  ]
  return (
    <Box>
      <h2>Expenses</h2>
      <Box>
        {
          expenses.map((item)=>( 
            <ExpenseItem key={item.id} name={item.name} expense={item.expense} id={item.id} />

          ))
        }
      </Box>
    </Box>
  )
}

export default ExpensesList