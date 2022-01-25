import axios from 'axios';
import { setUser } from '../reducers/userReducer';

export const registration = async (name, email, password) => {
    try {
        await axios.post(`http://localhost:3333/api/auth/registration`, {
            name,
            email,
            password
        })
        alert(`Hello ${name}`);
    } catch (error) {
       alert(error); 
    }

};

export const login = (email, password) => {
    return async dispatch =>{
    try {
        const response = await axios.post(`http://localhost:3333/api/auth/login`, {
            email,
            password
        })
        alert(`Hello ${email}`)
        dispatch (setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
    } catch (error) {
       alert(error); 
    }
    }
}
