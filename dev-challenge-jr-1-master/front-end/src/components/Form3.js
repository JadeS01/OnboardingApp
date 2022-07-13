import React from 'react'

// * Form3 will collect address (street address, city, state, zip).
const Form3 = ({formData, setFormData}) => {
  return (
    <div>Form 3
        <input type='text' placeholder='Street Address' className='form-control my-3' value={formData.street} onChange={(e) => setFormData({...formData, street: e.target.value})} required/>
        <input type='text' placeholder='City' className='form-control my-3' value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} required/>
        <input type='text' placeholder='State' className='form-control my-3' value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})}required/>
        <input type='text' placeholder='ZIP' className='form-control my-3' alue={formData.zip} onChange={(e) => setFormData({...formData, zip: e.target.value})} required/>
    </div>
  )
}

export default Form3