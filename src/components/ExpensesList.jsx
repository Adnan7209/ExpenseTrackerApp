import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import {Box, Typography } from '@mui/material'
import { AppContext } from './context/AppContext'


const ExpensesList = () => {
  const {expenses}= useContext(AppContext);
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