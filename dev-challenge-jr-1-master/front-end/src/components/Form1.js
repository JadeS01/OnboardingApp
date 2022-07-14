import React from 'react'

// * Form1 will collect username, password, and e-mail address.
const Form1 = ({formData, setFormData}) => {
  return (
    <div>Form 1
        <input type='text' placeholder='Username' className='form-control my-3' value={formData.user_name} onChange={(e) => setFormData({...formData, user_name: e.target.value})} required/>
        <input type='password' placeholder='Password' className='form-control my-3' value={formData.user_pw} onChange={(e) => setFormData({...formData, user_pw: e.target.value})} required/>
        <input type='email' placeholder='Email' className='form-control my-3' value={formData.user_email} onChange={(e) => setFormData({...formData, user_email: e.target.value})} required/>
    </div>
  )
}

export default Form1