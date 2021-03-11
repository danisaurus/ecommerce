import React from 'react';
import './form-input.styles.scss';


const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
    <input className='form-input' onChange= {handleChange} {...otherProps}/>
    {
        label ? (
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
            </label> 
        ): null
        
    }
    </div>
)
    /*need to use handleChange in order to bubble up any onChange that the input has*/


export default FormInput;