import React from 'react'
import './ShowImageGridView.css'
import { dotIcon, upDownArrow } from '@/assets/Icons'

const ShowImageGridView = ({details,title}) => {
    // console.log("gridview",details);
    return(
        <div className='show-image-gv'>
    <div className='show-image-title'><div className=' heading-600-16 c-blue1'>{title}</div>  <div className='curser-pointer'>{upDownArrow({width:24,height:24})}</div></div>
    <div className='img-gv-detail-container'>
    {details.map((imgDetail,index)=>(
        <div className='img-gv-detail-box' key={index}>
        <div className="img-gv-container"><img src={imgDetail.imgurl} alt={imgDetail.imgurl}/></div>
        <div className="img-gv-name"><div className='heading-400-14 c-blue1'>{imgDetail.name}</div> <span className='img-threedot'>{dotIcon({width:24,height:24})}</span></div>
        </div> 
         ))}
    </div>
    </div>
    )
}

export default ShowImageGridView