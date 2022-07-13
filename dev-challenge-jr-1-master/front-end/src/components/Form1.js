import React from 'react'

// * Form1 will collect username, password, and e-mail address.
const Form1 = ({formData, setFormData}) => {
  return (
    <div>Form 1
        <input type='text' placeholder='Username' className='form-control my-3' value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} required/>
        <input type='password' placeholder='Password' className='form-control my-3' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required/>
        <input type='email' placeholder='Email' className='form-control my-3' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required/>
    </div>
  )
}

export default Form1