import './login.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormState {
    user_name: string;
    user_password: string;
    user_email: string;
    user_contact: string;
}
export default function Register() {
    const navigate = useNavigate()

    const [form, setForm] = useState<FormState>({
        user_name: '',
        user_password: '',
        user_email: '',
        user_contact: ''
    })


    const handleRegister = async () => {
        let formcontent = {
            user_name: form.user_name,
            user_password: form.user_password,
            user_email: form.user_email,
            user_contact: form.user_contact
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/register', formcontent);
            console.log('Registration successful:', response.data);
            navigate('/products')


        } catch (error) {
            console.error('Input correct format:', error);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));


    }
    return (
        <div className="my-content" >
            <div className="wrapper">

                <form onSubmit={handleRegister}>
                    <h1>Register</h1>
                    <div className="input-box">
                        <input type="text" placeholder="User_name" required name='user_name'
                          value={form.user_name} onChange={handleChange} />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="email" required name='user_email'
                            value={form.user_email} onChange={handleChange} />
                        <i className='bx bxs-lock-alt' ></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required name='user_password'
                            value={form.user_password} onChange={handleChange} />
                        <i className='bx bxs-lock-alt' ></i>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="phone number" required name='user_contact'
                            value={form.user_contact} onChange={handleChange} />
                        <i className='bx bxs-lock-alt' ></i>
                    </div>
                    <button type="submit" className="btn">Register</button>
                    <div className="register-link">
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    )

}