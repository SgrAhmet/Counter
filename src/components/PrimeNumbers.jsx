import { useScrollTrigger } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import "./PrimeNumber.css"

const PrimeNumbers = () => {
    const [counter, setCounter] = useState(0)
     
    const handleMainButton =()=>{
       setCounter(counter + 1)
    }

    const handleResetButton =()=>{
       setCounter(0)
    }


  return (
    <div className='mainDiv'>

    <div className='body'>
        <p className='textArea'>{counter}</p>
          <button onClick={handleMainButton} className='mainButton'></button>
          <button onClick={handleResetButton} className='resetButton'></button>
    </div>

    
    </div>



  )
}

export default PrimeNumbers