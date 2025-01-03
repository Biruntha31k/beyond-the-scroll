import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err,setErr] = useState ("")

    useEffect(() => {
        window.scrollTo(0, 0);
        
        auth.onAuthStateChanged(function(user){
            if(user)
            {  
                navigate("/home")
            }
          })
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
         
          signInWithEmailAndPassword(auth,email,password).then((res)=>{
            navigate('/home');
          }).catch(()=>{
            setErr("Error Signing in please try again")
          })

        
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="p-10 bg-white rounded-lg shadow-md" style={{ width: "75%" }}>
                <h2 className="text-2xl font-serif mb-5 text-gray-800">Login</h2>
                <div className="mb-4">
                    <label className="block text-black font-serif ">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 p-2 w-full  rounded focus:outline-none border border-[#22C6F0] "
                    />
                </div>
                <div className="mb-4">
                    <label className="block   text-black font-serif">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 p-2 w-full  rounded focus:outline-none border border-[#22C6F0]"
                    />
                </div>

                <p className='text-red-600 cursor-pointer my-2' >{err}</p>
                <p className='text-[#1F2179] cursor-pointer my-2' onClick={() => navigate("/signup")}>New user? Register here</p>
                <button type="submit" className="bg-[#FF0000] text-white py-2 px-4 rounded hover:bg-[#22C6F0] transition duration-200 ease-in-out">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
