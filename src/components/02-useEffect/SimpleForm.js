import React, { useEffect, useState } from 'react'
import './effects.css'
export const SimpleForm = () => {
    const [Form, setForm] = useState({
        name: '',
        email: '',
    });
    const {name, email} = Form;
    useEffect( ()=> {
        console.log('Hey!');
    },[]);
    const handleInputChange = ({target}) =>{
        setForm({...Form, [target.name]: target.value});
    }

    return (
        <>
        <h1>useEfect</h1>
            <hr />
            <div className="form-group">
                <input type="text"
                        name="name" 
                        className="form-control"
                        placeholder="Tu nombre"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange} />
                
            </div>

        </>
    )
}
