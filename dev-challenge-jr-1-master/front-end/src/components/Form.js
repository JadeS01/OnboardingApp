import React, {useState} from 'react'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

const Form = () => {
    const [form, setForm] = useState(0)
    const [formData, setFormData] = useState({
        user_name: '',
        user_pw: '',
        user_email: '',
        user_first: '',
        user_last: '',
        user_phone: '',
        user_street: '',
        user_city: '',
        user_state: '',
        user_zip: ''
    })

    const {user_name, user_pw, user_email, user_first, user_last, user_phone, user_street, user_city, user_state, user_zip} = formData;

    const handleBack = () => {
        setForm((currForm) => currForm-1);
    }
    const handleSave = async() => {
        try{
            const body = {user_name, user_pw, user_email, user_first, user_last, user_phone, user_street, user_city, user_state, user_zip};
            
            const res = await fetch(
                'http://localhost:5000/form/create',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }
            );
            if(!res.ok){
                alert('error')
            } else {
                setForm((currForm) => currForm+1);
            }
        }catch(err){
            console.error(err.message);
        }
    }

    const handleSubmit = async()=> {
        try{
            const body = {user_name, user_pw, user_email, user_first, user_last, user_phone, user_street, user_city, user_state, user_zip};
            const res = await fetch(
                'http://localhost:5000/form/update',
                {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                        // 'Credentials': 'include'
                    },
                    withCredentials: 'true',
                    body: JSON.stringify(body)
                }
            );
            setForm((currForm) => currForm+1);
            // window.location = '/';
        }catch(err){
            console.error(err.message);
        }
    }

    const handleDisplay = () => {
        if(form === 0){
            return <Form1 formData={formData} setFormData={setFormData} />;
        } else if(form === 1){
            return <Form2 formData={formData} setFormData={setFormData} />;
        } else if(form === 2){
            return <Form3 formData={formData} setFormData={setFormData} />;
        }else{
            window.location = '/';
        }
    }

    
  return (
    <div className='d-flex mt-5 mb-0' class='container'>
        {/* form container */}
        <div className='container form-group'>
            <div>{handleDisplay()}</div>
        
        <div className='row'>
            <div className='col-6'>
            <button className='btn btn-danger' onClick={() => handleBack()} disabled={form < 2}>Back</button>
            </div>
            <div className='col-6 text-right'>
            {form === 0 ? <button className='btn btn-success' onClick={() => handleSave()}>Save</button> :  <button className='btn btn-success' onClick={() => handleSubmit()}>Save</button>}    
            </div>
        </div>
        </div>
    </div>
  )
}

export default Form