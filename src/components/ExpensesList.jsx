import React, { useContext, useState } from 'react'
import ExpenseItem from './ExpenseItem'
import {Box, Typography } from '@mui/material'
import { AppContext } from './context/AppContext'
import SearchBar from './context/SearchBar'


const ExpensesList = () => {
  const {expenses}= useContext(AppContext);
  const [search,setSearch] = useState('');
  const searchedList = expenses.filter(
    (expense) => (
      (expense.name).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <Box>
      <h2>Expenses</h2>
      <SearchBar search={search} setSearch={setSearch}/>    
      <Box>
        {
          searchedList.length>0 ? (         
            searchedList.map((item)=>( 
              <ExpenseItem key={item.id} name={item.name} expense={item.expense} id={item.id} />
            ))
          ):(
            <Typography>No Items to be displayed</Typography>
          )
        }
      </Box>
    </Box>
  )
}

export default ExpensesList