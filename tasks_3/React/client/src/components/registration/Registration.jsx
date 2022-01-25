import React, {useState} from 'react';
import './registration.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";



const Registration = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <>
        <div className='registration'>
            <div className="registration__header">Registr</div>
            <Input value={name} setValue={setName} type="text" placeholder="Pleas enter Name..."/>
            <Input value={email} setValue={setEmail} type="text" placeholder="Pleas enter email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Pleas enter password..."/>
            <button className="registration__btn" onClick={() => registration(name, email, password)}>Enter</button>
        </div>
        <h1 className='registration__h'>Hello {name}!</h1>
        </>
    );
};

export default Registration;
