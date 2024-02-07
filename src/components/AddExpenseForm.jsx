import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AppContext } from './context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
  const [expenseName,setExpenseName] = useState('');
  const [amountSpent,setAmountSpent] = useState(0);
  const {dispatch} =useContext(AppContext);
  console.log(expenseName);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!expenseName.trim()) {
      alert('Expense Name is required');
      return; 
    }
    if (!amountSpent) {
      alert('Spent amount is required');
      return; 
    }   
    if (isNaN(amountSpent) || Number(amountSpent) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    console.log("values",expenseName,amountSpent);

    const newExpenseItem = {
                            id:uuidv4(),
                            name:expenseName,
                            expense:amountSpent
                          };
                            // alert(`name: ${newExpenseItem.name} expense: ${newExpenseItem.expense}`);
    dispatch({
      type:'ADD_EXPENSE',
      payload:newExpenseItem,
    });
    console.log("type",typeof(expenseName),typeof(amountSpent),typeof(newExpenseItem));
    setExpenseName('');
    setAmountSpent(0);
  }
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <Typography>Add New Expense</Typography>
      <TextField 
        label="Expense Name" 
        type='text'
        value={expenseName}
        onChange={(e)=>setExpenseName(e.target.value)}
        required
      />
      <TextField 
        label="Spent" 
        type='number'
        value={amountSpent}
        onChange={(e)=>setAmountSpent(Number(e.target.value))}
        required
      />
      <Button type="submit">Add Item</Button>      
    </Box>
  )
}

export default AddExpenseForm