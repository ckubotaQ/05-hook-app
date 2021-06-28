import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';
export const SimpleForm = () => {
    const [Form, setForm] = useState({
        name: '',
        email: '',
    });
    const {name, email} = Form;
    useEffect( ()=> {
        // console.log('Hey!');
    },[]);
    useEffect( ()=> {
        // console.log('FormCambio!');
    },[Form]);
    useEffect( ()=> {
        // console.log('emailCambio!');
    },[email]);
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
                   <input type="email"
                        name="email" 
                        className="form-control"
                        placeholder="email@tuemail.com"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange} />

            </div>
            { (name==='123') && <Message />}
        </>
    )
}
