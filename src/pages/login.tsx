import './login.css'
export default function Login() {
    return (
        <div className="my-content" >
        <div className="wrapper">

            <form>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
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