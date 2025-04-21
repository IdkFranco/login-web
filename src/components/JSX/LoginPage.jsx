import '../CSS/LoginPage.css'
import { FaLock, FaUser } from 'react-icons/fa';

const LoginPage = () => {
    return (
        <div className='wrapper'>
            <div className='form-login-box'>
                <form action=''>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username'/>
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='Password'/>
                        <FaLock className='icon'/>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox'/>Remember me</label>
                        <a href='/#'>Forgot password?</a>
                    </div>
                    <div className='button-box'>
                        <button>
                            login
                        </button>
                    </div>
                    <div className="register-link">
                        <p>Don't have an account? <a href='/#'>Register</a></p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default LoginPage;