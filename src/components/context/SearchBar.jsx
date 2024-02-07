import { Box, TextField } from '@mui/material'
import React from 'react'

const SearchBar = ({search,setSearch}) => {
  return (
    <Box>
        <TextField
        type='text'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        label='Search for Expense'
        autoComplete='off'
        />
        
    </Box>
  )
}

export default SearchBar