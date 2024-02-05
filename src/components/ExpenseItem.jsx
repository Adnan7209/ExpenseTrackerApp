import { Stack, Typography } from '@mui/material'
import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { blue } from '@mui/material/colors';

const ExpenseItem = ({name,spent}) => {
  return (
    <Stack direction="row" gap={5}  border={1}>
        <Typography>
            {name}
        </Typography>
        <Typography bgcolor="blue" px={2} borderRadius={5}>
            {spent}
        </Typography>
        <CancelIcon/>
    </Stack>
  )
}

export default ExpenseItem