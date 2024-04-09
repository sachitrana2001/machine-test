import React from 'react'
import './TextDetailsOne.css'
const TextDetailsOne = ({details ,title}) => {
  return (
    <div className='text-details-one'>
    <div className='text-details-title heading-600-16 c-blue1'>{title}</div>
    {details.map((vehicleDetail,index)=>(
       <div className='text-detail-box' key={index}>
       <div className="text-detail-box-title heading-400-14 c-blue1">{vehicleDetail.title}</div>
       <div className="text-detail-box-name heading-400-14 c-blue1">{vehicleDetail.name}</div>
       <div className="text-detail-box-last-text heading-400-14 c-blue3">{vehicleDetail.lastText}</div>
       </div> 
        ))}
    </div>
  )
}

export default TextDetailsOne