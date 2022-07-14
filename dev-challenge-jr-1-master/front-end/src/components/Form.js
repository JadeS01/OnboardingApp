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

    // username: '',
    //     password: '',
    //     email: '',
    //     firstName: '',
    //     lastName: '',
    //     telephone: '',
    //     street: '',
    //     city: '',
    //     state: '',
    //     zip: ''
        // user_name: '',
        // user_pw: '',
        // user_email: '',
        // user_first: '',
        // user_last: '',
        // user_phone: '',
        // user_street: '',
        // user_city: '',
        // user_state: '',
        // user_zip: ''

    const {user_name, user_pw, user_email, user_first, user_last, user_phone, user_street, user_city, user_state, user_zip} = formData;
    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleBack = () => {
        setForm((currForm) => currForm-1);
    }
    const handleSave = async() => {
        console.log(formData)
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
            setForm((currForm) => currForm+1);
        }catch(err){
            console.error(err.message);
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            const body = formData;
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
            window.location = '/';
        }catch(err){
            console.error(err.message);
        }
    }

    const handleDisplay = () => {
        if(form === 0){
            return <Form1 formData={formData} setFormData={setFormData} />;
        } else if(form === 1){
            return <Form2 formData={formData} setFormData={setFormData} />;
        } else {
            return <Form3 formData={formData} setFormData={setFormData} />;
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
            {form !== 2 ? <button className='btn btn-success' onClick={() => handleSave()}>Save</button> : <a href='/'><button className='btn btn-success' onClick={handleSubmit}>Save</button></a>}       
            </div>
        </div>
        </div>
    </div>
  )
}

export default Form