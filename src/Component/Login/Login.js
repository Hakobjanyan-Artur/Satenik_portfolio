import { useNavigate } from 'react-router-dom'
import './Login.css'


function Login() {
    const navigate = useNavigate()
    return (
        <div className='login'>
            <div className='container'>
                <div className='formLogin'>
                    <form>
                        <div className='title'>
                            <h1>Login</h1>
                        </div>
                        <input type="txt" placeholder='email' />
                        <input type="password" placeholder='password' />
                        <div className='submit'>
                        <button>Sign in</button>
                        <span onClick={() => navigate('/registration')}>Sign Up</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login