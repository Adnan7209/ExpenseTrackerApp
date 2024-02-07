import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'

const Expenditure = () => {
  const {totalExpenses}=useContext(AppContext);
  return (
    <div>Expenditure : {totalExpenses}</div>
  )
}

export default Expenditure