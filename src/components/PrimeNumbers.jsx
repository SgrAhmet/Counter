import { useScrollTrigger } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import "./PrimeNumber.css"
import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

const PrimeNumbers = () => {
    const [counter, setCounter] = useState(0)
    const [displayMenu, setDisplayMenu] = useState(0)
     
    const handleMainButton =()=>{
       setCounter(counter + 1)
    }

    const handleResetButton =()=>{
       setCounter(0)
    }

    const toggleMenu =()=>{
       if(displayMenu == 0){
          document.getElementsByClassName("menuDiv")[0].style.display = "block";
          setDisplayMenu(1)
       }else{
        document.getElementsByClassName("menuDiv")[0].style.display = "none";
          setDisplayMenu(0)
       }
    }


  return (
    <div className='mainDiv'>
      <IoMenu onClick={toggleMenu} className='menuIcon' />
      <div className='menuDiv'>

      <IoMdCloseCircle onClick={toggleMenu}  className='closeIcon'/>
      </div>

    <div className='body'>
        <p className='textArea'>{counter}</p>
          <button onClick={handleMainButton} className='mainButton'></button>
          <button onClick={handleResetButton} className='resetButton'></button>
    </div>

    
    </div>



  )
}

export default PrimeNumbers