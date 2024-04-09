import React from 'react'
import { costSchema } from '@/Schema'

import InputField from '@/SubComponent/InputField'
import { useFormik } from 'formik';
const lifeCycleInitialValues={
     
    serviceCostOne: "",
    serviceCostTwo: "",
    serviceCostThree:"",
    serviceCostFour:"",
    serviceCostFive: "",
    serviceCostSix: "",
    serviceCostSeven: "",
    serviceCostEight:"",

    fuelCostOne: "",
    fuelCostTwo: "",
    fuelCostThree: "",
    fuelCostFour: "",
    fuelCostFive: "",
    fuelCostSix: "",
    fuelCostSeven: "",
    fuelCostEight: "",
}

const Cost = () => {
    const {values,errors,handleBlur,touched,handleChange,handleSubmit}= useFormik({
        initialValues:lifeCycleInitialValues,
        validationSchema:costSchema,
        onSubmit:(value)=>{
           console.log("onSubmit formik-->>",value);
            }
      }) 

      const costData=[
        {left:{title:"Service Cost Estimate",para:"Enter identification details here"},
        right:[
          {block_type:"field-type-four",input_type1:"serviceCostOne",labelName1:"Year 1 Estimated Cost",placeholder1:"Enter Estimated Cost",input_type2:"serviceCostTwo",labelName2:"Year 2 Estimated Cost",placeholder2:"Enter Estimated Cost",input_type3:"serviceCostThree",labelName3:"Year 3 Estimated Cost",placeholder3:"Enter Estimated Cost"},
          {block_type:"field-type-four",input_type1:"serviceCostFour",labelName1:"Year 4 Estimated Cost",placeholder1:"Enter Estimated Cost",input_type2:"serviceCostFive",labelName2:"Year 5 Estimated Cost",placeholder2:"Enter Estimated Cost",input_type3:"serviceCostSix",labelName3:"Year 6 Estimated Cost",placeholder3:"Enter Estimated Cost"},
          {block_type:"field-type-five",input_type1:"serviceCostSeven",labelName1:"Year 7 Estimated Cost",placeholder1:"Enter Estimated Cost",input_type2:"serviceCostEight",labelName2:"Year 8 Estimated Cost",placeholder2:"Enter Estimated Cost"}, 
        ]},
        {left:{title:"Fuel Cost Estimate",para:"Enter identification details here"},
        right:[
          {block_type:"field-type-four",input_type1:"fuelCostOne",labelName1:"Year 1 Estimated Cost",placeholder1:"Enter Estimated Cost",input_type2:"fuelCostTwo",labelName2:"Year 2 Estimated Cost",placeholder2:"Enter Estimated Cost",input_type3:"fuelCostThree",labelName3:"Year 3 Estimated Cost",placeholder3:"Enter Estimated Cost"},
          {block_type:"field-type-four",input_type1:"fuelCostFour",labelName1:"Year 4 Estimated Cost",placeholder1:"Enter Estimated Cost",input_type2:"fuelCostFive",labelName2:"Year 5 Estimated Cost",placeholder2:"Enter Estimated Cost",input_type3:"fuelCostSix",labelName3:"Year 6 Estimated Cost",placeholder3:"Enter Estimated Cost"},
          {block_type:"field-type-five",input_type1:"fuelCostSeven",labelName1:"Year 7 Estimated Cost",placeholder1:"Enter Estimated Cost",input_type2:"fuelCostEight",labelName2:"Year 8 Estimated Cost",placeholder2:"Enter Estimated Cost"}, 
        ]}
      ]
  return (
    costData.map((items,index)=>(
        <div className={`add-v-form ${index>0 ? "pt-104":""}`}> 
          <div className='add-v-form-left-section'>
          <div className='heading-600-16 c-blue1'>{items.left.title}</div>
          <div className='heading-400-12 c-gray2'>{items.left.para}</div>
        </div>
          <div className='add-v-form-right-section'>
          <form onSubmit={handleSubmit} className='add-v-form-section'>
          {items.right.map((fields,i)=>(<>
            <div className={fields.block_type} key={index+i}>
               
                {fields.block_type==="field-type-four" && <>
                <InputField key={index+i+fields.labelName1} labelName={fields.labelName1} placeholder={fields.placeholder1} onBlur={handleBlur} onChange={handleChange} type={fields.input_type1} value={values[fields.input_type1]}/>
                <InputField key={index+i+fields.labelName1} labelName={fields.labelName2} placeholder={fields.placeholder2} onBlur={handleBlur} onChange={handleChange} type={fields.input_type2} value={values[fields.input_type2]}/>
                <InputField key={index+i+fields.labelName1} labelName={fields.labelName3} placeholder={fields.placeholder3} onBlur={handleBlur} onChange={handleChange} type={fields.input_type3} value={values[fields.input_type3]}/>
                </>}
                {fields.block_type==="field-type-five" && <>
                <InputField  key={index+i+fields.labelName1} labelName={fields.labelName1} placeholder={fields.placeholder1} onBlur={handleBlur} onChange={handleChange} type={fields.input_type1} value={values[fields.input_type1]}/>
                <InputField  key={index+i+fields.labelName1} labelName={fields.labelName2} placeholder={fields.placeholder2} onBlur={handleBlur} onChange={handleChange} type={fields.input_type2} value={values[fields.input_type2]}/>
                </>}
               
               </div>
            </>))}
    
            
    
            </form>
          </div>
        </div>
    ))
  )
}

export default Cost