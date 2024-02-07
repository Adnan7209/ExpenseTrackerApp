import { Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { blue } from '@mui/material/colors';
import { AppContext } from './context/AppContext';

const ExpenseItem = (props) => {
  const {dispatch}=useContext(AppContext);
  const handleDelete = () =>{
    dispatch({type:'DELETE_EXPENSE',payload:props.id})
  }
  return (
    <Stack direction="row" gap={5}  border={1}>
        <Typography>
            {props.name}
        </Typography>
        <Typography bgcolor="blue" px={2} borderRadius={5}>
            {props.expense}
        </Typography>
        <CancelIcon onClick={handleDelete}/>
    </Stack>
  )
}

export default ExpenseItem