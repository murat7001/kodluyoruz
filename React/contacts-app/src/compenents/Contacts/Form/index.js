import React, { useState } from 'react'

function Form({addContact, contacts}) {
    const[form, setForm] = useState({fullname:"", phone_number: ""});

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const onSubmit = () => {
        if (form.fullname === '' || form.phone_number === '') {
            return false
        }

        addContact([...contacts, form])
        setForm({fullname:"", phone_number: ""})
    }

    return (
        <div>
            <div>
                <input name='fullname' placeholder='Full Name'
                value={form.fullname} onChange={onChangeInput}/>
            </div>

            <div>
                <input name='phone_number' placeholder='Phone Number'
                value={form.phone_number} onChange={onChangeInput}/>
            </div>

            <div className='btn'>
                <button onClick={onSubmit}>Add</button>
            </div>
        </div>
    )
}

export default Form;