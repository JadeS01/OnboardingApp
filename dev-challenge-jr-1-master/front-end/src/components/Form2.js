import React from 'react'

// * Form2 will collect first name, last name, and telephone number.
const Form2 = ({formData, setFormData}) => {
  return (
    <div>Form 2
        <input type='text' placeholder='First Name' className='form-control my-3' value={formData.user_first} onChange={(e) => setFormData({...formData, user_first: e.target.value})} required/>
        <input type='text' placeholder='Last Name' className='form-control my-3' value={formData.user_last} onChange={(e) => setFormData({...formData, user_last: e.target.value})} required/>
        <input type='text' placeholder='Telephone' className='form-control my-3' value={formData.user_phone} onChange={(e) => setFormData({...formData, user_phone: e.target.value})} required/>
    </div>
  )
}

export default Form2