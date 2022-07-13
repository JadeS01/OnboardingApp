import React, {useState} from 'react'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import { Navigate } from 'react-router-dom';

const Form = () => {
    const [form, setForm] = useState(0)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        telephone: '',
        street: '',
        city: '',
        state: '',
        zip: ''
    })
    const handleBack = () => {
        setForm((currForm) => currForm-1);
    }
    const handleSave = () => {
        setForm((currForm) => currForm+1);
    }

    const handleDisplay = () => {
        if(form === 0){
            return <Form1 formData={formData} setFormData={setFormData}/>;
        } else if(form === 1){
            return <Form2 formData={formData} setFormData={setFormData}/>;
        } else {
            return <Form3 formData={formData} setFormData={setFormData}/>;
        }
    }

    
  return (
    <div className='d-flex mt-5 mb-0'>
        {/* form container */}
        <div className='container form-group'>
            <div>{handleDisplay()}</div>
        
        <div className='row'>
            <div className='col-6'>
            <button className='btn btn-danger' onClick={() => handleBack()} disabled={form === 0}>Back</button>
            </div>
            <div className='col-6 text-right'>
            {form !== 2 ? <button className='btn btn-success' onClick={() => handleSave()}>Save</button> : <a href='/'><button className='btn btn-success'>Save</button></a>}       
            </div>
        </div>
        </div>
    </div>
  )
}

export default Form