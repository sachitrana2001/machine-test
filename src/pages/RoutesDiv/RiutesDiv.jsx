import React from 'react'
import { useNavigate } from 'react-router-dom';
const RiutesDiv = () => {
    const navigate=useNavigate();
  return (
    <div className='w-100' style={{position:"relative"}}>
    <img className='w-100' src='/assets/rouView.png' alt=''/>
    <div className='rout-btn' onClick={()=>navigate('/createroute')}>{"  "}</div>
    <div className='rout-btn-map' onClick={()=>navigate('/routedit')}>{"  "}</div>
    </div>
  )
}

export default RiutesDiv