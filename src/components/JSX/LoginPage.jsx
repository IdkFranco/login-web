import '../CSS/LoginPage.css'
import { FaLock, FaUser } from 'react-icons/fa';
import React, {useState} from 'react';

const LoginPage = () => {
    const[inputUsername, setInputUsername] = useState('');
    const[inputPassword, setInputPassword] = useState('');
    const[allowed, setAllowed] = useState(false);
    const[error, setError] = useState(false);

    const users = [
        {username: 'admin', password: '1234'} 
    ]
    

    const handleLogin = () => {
        const foundUser = users.find(
            (user) => 
                user.username === inputUsername && user.password === inputPassword
        );

        if(foundUser) {
            setAllowed(true);
            setError(false)
        } else {
            setError(true);
            setAllowed(false);
        }

    }

    return (
        <div className='wrapper'>
            <div className='form-login-box'>
                <form action=''>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input 
                            type='text' 
                            placeholder='Username'
                            value={inputUsername}
                            onChange={(e) => setInputUsername(e.target.value)}
                        />
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input 
                            type='text' 
                            placeholder='Password'
                            value={inputPassword}
                            onChange={(e) => setInputPassword(e.target.value)}
                        />
                        <FaLock className='icon'/>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox'/>Remember me</label>
                        <a href='/#'>Forgot password?</a>
                    </div>
                    <div className='button-box'>
                        <button type='button' onClick={handleLogin}>
                            login
                        </button>
                    </div>
                    <div className='message-box'>
                        {allowed && <p>Welcome</p>}
                        {error && <p>Error, try again</p>}
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