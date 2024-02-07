import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'

const Budget = () => {
  const {budget} = useContext(AppContext);
  return (
    <div>budget: 
      {budget}
      </div>
  )
}

export default Budget