import React from 'react'

// * Form2 will collect first name, last name, and telephone number.
const Form2 = ({formData, setFormData}) => {
  return (
    <div>Form 2
        <input type='text' placeholder='First Name' className='form-control my-3' value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} required/>
        <input type='text' placeholder='Last Name' className='form-control my-3' value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} required/>
        <input type='text' placeholder='Telephone' className='form-control my-3' value={formData.telephone} onChange={(e) => setFormData({...formData, telephone: e.target.value})} required/>
    </div>
  )
}

export default Form2