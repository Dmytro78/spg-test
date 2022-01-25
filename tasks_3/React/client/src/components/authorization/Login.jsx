import React, {useState} from 'react';
import './login.module.css'
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import { login } from '../../actions/user';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <>
        <div className='registration'>
            <div className="registration__header">Login</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Pleas enter email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Pleas enter password..."/>
            <button className="registration__btn" onClick={() => dispatch(login(email, password))}>Enter</button>
        </div>
        </>
    );
};

export default Login;
