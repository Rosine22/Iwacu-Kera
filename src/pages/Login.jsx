import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { stringify } from 'postcss';

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
        setErrors({ ...errors, [e.target.name]: '' });
        setLoginError('');
        setSuccessMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = {};
        if (!formData.username) validationErrors.username = 'Username is required';

        if (!formData.password) validationErrors.password = 'Password is required';

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {
            const response = await axios.post( 'https://iwacu-kera-backend-1.onrender.com/api/v1/admin/login', formData);
            console.log('Login successful:', response.data);
            setSuccessMessage('Login successful! Redirecting to dashboard...');
            localStorage.setItem("token",response.data.token)
            // localStorage.setItem("user", JSON.stringify())
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            setLoginError(error.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 mt-40">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">Login Here</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-4">Username</label>
                            <input id="username" name="username" type="text" autoComplete="username" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-4`} placeholder="Username" value={formData.username} onChange={handleChange} />
                            {errors.username && <p className="mt-1 text-red-500 text-sm">{errors.username}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-4 text-gray-700">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className={`appearance-none mb-4 rounded-none relative block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} placeholder="Password" value={formData.password} onChange={handleChange} />
                            {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password}</p>}
                        </div>
                    </div>

                    {successMessage && <p className="mt-1 text-green-500 text-sm">{successMessage}</p>}
                    {loginError && <p className="mt-1 text-red-500 text-sm">{loginError}</p>}

                    <div>
                        <button type="submit" className="mt-4 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Login
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}
