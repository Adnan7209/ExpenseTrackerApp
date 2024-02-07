import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
import { Box } from '@mui/material';

const Remaining = () => {
  const {budget,totalExpenses} = useContext(AppContext);
  
  console.log("total",totalExpenses);
  return (    
    <Box>
      Remaining : {budget - totalExpenses}
    </Box>
  )
}

export default Remaining