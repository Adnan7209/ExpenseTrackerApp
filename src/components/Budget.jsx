import React, { useContext, useState } from 'react'
import { AppContext } from './context/AppContext'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';

const Budget = () => {
  const {budget,dispatch} = useContext(AppContext);
  const [newBudget,setNewBudget] = useState();
  const [isEditing,setIsEditing] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("new",newBudget);    
    dispatch({
      type:"UPDATE_BUDGET",
      payload:newBudget,
    });
    setNewBudget(0);
    setIsEditing(false);
  }
  return (
    <Box 
    >      
      <Typography>
        Budget : {budget}
      </Typography>
      {
        !isEditing && (
        <Button
          endIcon={<EditIcon/>}
          onClick={()=> setIsEditing(true)}
        >
          Edit
        </Button>)
      }
      {
        isEditing && (
        <Box 
          component="form"
        onSubmit={handleSubmit}
        >
          <TextField
            type='number'
            placeholder='Enter new Budget'
            value={newBudget}
            onChange={(e)=>setNewBudget(Number(e.target.value))}
          />      
          <Button 
            type='submit'
          >
            Update
          </Button>
          <Button 
            onClick={
              ()=>{
                setIsEditing(false)
                setNewBudget(0)
              }
            }
            endIcon={<CancelIcon/>}
          >
            Cancel
          </Button>         
        </Box>)
      }      
    </Box>
  )
}

export default Budget