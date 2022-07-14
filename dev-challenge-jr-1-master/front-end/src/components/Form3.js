import React from 'react'

// * Form3 will collect address (street address, city, state, zip).
const Form3 = ({formData, setFormData}) => {
  return (
    <div>Form 3
        <input type='text' placeholder='Street Address' className='form-control my-3' value={formData.user_street} onChange={(e) => setFormData({...formData, user_street: e.target.value})} required/>
        <input type='text' placeholder='City' className='form-control my-3' value={formData.user_city} onChange={(e) => setFormData({...formData, user_city: e.target.value})} required/>
        <input type='text' placeholder='State' className='form-control my-3' value={formData.user_state} onChange={(e) => setFormData({...formData, user_state: e.target.value})}required/>
        <input type='text' placeholder='ZIP' className='form-control my-3' value={formData.user_zip} onChange={(e) => setFormData({...formData, user_zip: e.target.value})} required/>
    </div>
  )
}

export default Form3