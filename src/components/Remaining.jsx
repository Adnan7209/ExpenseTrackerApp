import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'

const Remaining = () => {
  const {budget,totalExpenses} = useContext(AppContext);
  
  console.log("total",totalExpenses);
  return (    
    <box>
      Remaining : {budget - totalExpenses}
    </box>
  )
}

export default Remaining