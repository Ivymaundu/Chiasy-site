import './login.css';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Authtype {
    user_name: string,
    pass_word: string
}

export default function Login() {

    const navigate = useNavigate()
    const [form,setForm]=useState<Authtype>({
        user_name:'',
        pass_word:''
    })
    type ResponseData = {
        access_token: string,
        token_type: string
    }
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let formContent: Authtype = {
            user_name: user_name,
            pass_word: pass_word
        };
        try {

            const apiUrl = 'http://127.0.0.1:8000/login';
            const response = await axios.post(apiUrl,
                { ...formContent }, {
                headers: {
                    'Content-Type': 'application/json',
                },
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
            navigate("/dashboard")
        } catch (error) {
            console.log('error.......', error)
        }
    }
    
    return (
        <div className="my-content" >
        <div className="wrapper">

            <form>
                <h1>Login</h1>
                <div className="input-box">
                    <input 
                    type="text" 
                    placeholder="Username" 
                    required 
                    value={form.user_name}
                    onChange={(e) => setForm({ ...form, user_name: e.target.value })}

                    />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input 
                    type="password" 
                    placeholder="Password"
                    value={form.pass_word} 
                    required 
                    onChange={(e) => setForm({ ...form, pass_word: e.target.value })}
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