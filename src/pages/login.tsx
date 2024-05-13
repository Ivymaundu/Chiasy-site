import './login.css';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Authtype {
    username: string,
    password: string
}

export default function Login() {

    const navigate = useNavigate()
    const [form,setForm]=useState<Authtype>({
        username:'',
        password:''
    })
    type ResponseData = {
        access_token: string,
        token_type: string
    }
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let formContent: Authtype = {
            username: form.username,
            password: form.password
        };
        try {

            const apiUrl = 'http://127.0.0.1:8000/login';
            const response = await axios.post<ResponseData>(apiUrl,
                { ...formContent }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log('response', response.data)

            const responseData: ResponseData = {
                ...response.data
            }
            // setIsLoggedIn(true);
            console.log("responseData.......", responseData)

            localStorage.setItem("token", responseData.access_token)
            let mytoken =localStorage.getItem("token")
            console.log(mytoken)
            navigate("/products")
        } catch (error) {
            console.log('error.......', error)
        }
    }
    
    return (
        <div className="my-content" >
        <div className="wrapper">

            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input 
                    type="text" 
                    placeholder="Username" 
                    required 
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}

                    />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input 
                    type="password" 
                    placeholder="Password"
                    value={form.password} 
                    required 
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
/>
                    <i className='bx bxs-lock-alt' ></i>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot Password</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="register-link">
                    <p>Dont have an account? <a href="/register">Register</a></p>
                </div>
            </form>
        </div>
        </div>
    )
}