import { Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const AddExpenseForm = () => {
  const [expenseName,setExpenseName] = useState('');
  const [amountSpent,setAmountSpent] = useState('');
  console.log(expenseName);
  return (
    <Box>
      <Typography>Add New Expense</Typography>
      <TextField label="Expense Name" type='text'
      value={expenseName}
      onChange={(e)=>setExpenseName(e.target.value)}
      />
      <TextField label="Spent" type='number'
      value={amountSpent}
      onChange={(e)=>setAmountSpent(e.target.value)}
      />
      
    </Box>
  )
}

export default AddExpenseForm