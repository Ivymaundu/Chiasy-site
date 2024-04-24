import './login.css'
export default function Register() {
    return (
        <div className="my-content" >
            <div className="wrapper">

                <form>
                    <h1>Register</h1>
                    <div className="input-box">
                        <input type="text" placeholder="User-name" required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="email" required />
                        <i className='bx bxs-lock-alt' ></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
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