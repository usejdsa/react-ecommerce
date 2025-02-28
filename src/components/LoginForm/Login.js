import React, { useEffect, useState } from 'react'

function Login() {
    const [username, setUsername] = useState(() => {
        return localStorage.getItem('username') || '';
    });
    const [password, setPassword] = useState(() => {
        return localStorage.getItem('password') || '';
    });

    useEffect(() => {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    }, [username, password]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Username:", username, "Password:", password);
        window.location.href = '/';
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-50 h-[83.2vh]">
            <div className="bg-white p-6 rounded-sm shadow-lg w-full sm:w-96">
                <h3 className="text-xl font-bold text-center mb-4">Login</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full p-3 border border-gray-300 rounded-sm"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-sm"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white rounded-sm hover:bg-indigo-900 transition-colors duration-300 ease-in-out">Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login