import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import APIService from './APIService';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useCookies(['mytoken']);
    const [isLogin, setLogin] = useState(true);
    const [error, setError] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        const userToken = token['mytoken'];
        console.log('Login User token is', userToken);
        console.log('Data type', typeof userToken);

        if (userToken && userToken !== 'undefined') {
            navigate('/articles');
        } else {
            navigate('/');
        }
    }, [token, navigate]);

    const loginBtn = async () => {
        if (username.trim().length === 0 || password.trim().length === 0) {
            setError('Username and password are required.');
            return;
        }

        try {
            const response = await APIService.LoginUser({ username, password });
            setToken('mytoken', response.token, { path: '/' });
            setError('');
        } catch (error) {
            console.error('Login error:', error);
            setError('Invalid username or password.');
        }
    };

    const registerBtn = async () => {
        if (username.trim().length === 0 || password.trim().length === 0) {
            setError('Username and password are required.');
            return;
        }

        try {
            await APIService.RegisterUser({ username, password });
            await loginBtn(); // Automatically log in after registration
            setError('');
        } catch (error) {
            console.error('Registration error:', error);
            setError('Registration failed. Please try again.');
        }
    };

    const loginStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + "img/10.jpg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100%',
        height: '77vh',
        backgroundPosition: 'center',
        margin: 0,
    };

    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row">
                    <h1 className="alert alert-danger">Welcome to Blog</h1>
                    <br />
                    <br />

                    <div className="col-sm-4">
                        {isLogin ? <h3>Please Login Here</h3> : <h3>Please Register Here</h3>}
                        {error && <div className="alert alert-danger">{error}</div>}

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                value={username}
                                className="form-control"
                                placeholder="Enter Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                value={password}
                                className="form-control"
                                placeholder="Enter Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <br />

                        <div>
                            {isLogin ? (
                                <div>
                                    <button onClick={loginBtn} className="btn btn-primary">Login</button>
                                    <p>If You Don't Have an Account, Please</p>
                                    <button onClick={() => setLogin(false)} className="btn btn-primary">Register</button>
                                </div>
                            ) : (
                                <div>
                                    <button onClick={registerBtn} className="btn btn-primary">Register</button>
                                    <p>If You Have an Account, Please</p>
                                    <button className="btn btn-primary" onClick={() => setLogin(true)}>Login</button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-sm-8 full-img" style={loginStyle}></div>
                </div>
            </div>
        </div>
    );
}

export default Login;