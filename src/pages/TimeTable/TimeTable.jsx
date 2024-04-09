import React from 'react'
import { useNavigate } from 'react-router-dom';
const TimeTable = () => {
    const navigate=useNavigate();
  return (
    <div className='w-100' style={{position:"relative"}}>
    <img className='w-100' src='/assets/timeTable1.svg' alt=''/>
    <div className='rout-btn' onClick={()=>navigate('/timeview')}>{"  "}</div>
    <div className='rout-btn-map' onClick={()=>navigate('/timeedit')}>{"  "}</div>
    </div>
  )
}

export default TimeTable