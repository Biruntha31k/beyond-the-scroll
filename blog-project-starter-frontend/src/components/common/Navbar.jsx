import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import auth from '../../config/firebase';
import { useState } from 'react';
import { signOut } from 'firebase/auth';

function Navbar() {
  const navigate = useNavigate();
  const [log, setLog] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setLog(true);
      } else {
        setLog(false);
      }
    });
  }, []);

  function logout() {
    signOut(auth);
  }

  return (
    <div className='navbar'>
      <h2 className='brand'>Beyond the Scroll</h2>
      <div className='nav-links'>
        <Link className='nav-item' to={"/home"}>
          Home
        </Link>
        <Link className='nav-item' to={"/blogs"}>
          Blogs
        </Link>
        <Link className='nav-item' to={"/contact"}>
          Contact
        </Link>

        {log ? (
          <button className='auth-button' onClick={logout}>
            Logout
          </button>
        ) : (
          <button className='auth-button' onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
