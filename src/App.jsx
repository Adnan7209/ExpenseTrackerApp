import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import Remaining from './components/Remaining'
import Expenditure from './components/Expenditure'
import ExpensesList from './components/ExpensesList'
import AddExpenseForm from './components/AddExpenseForm'
import Budget from './components/Budget'

const App = () => {
  return (
    <Box>
      <Typography>
        <h1>Expense Tracker</h1>
      </Typography>
      <Stack>
        <Budget/>
        <Expenditure/>
        <Remaining/>        
      </Stack>
      <ExpensesList/>
      <AddExpenseForm/>
    </Box>
  )
}

export default App