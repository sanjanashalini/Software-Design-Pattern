import React from 'react';
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();

    // Function to handle navigation based on category
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    <h2 className='card-title'>Login</h2>
                    <p className='card-description'>Enter your email below to login</p>
                </div>
                <div className='card-content'>
                    <div className='divider'>
                        <span className='divider-line' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="user@iamneo.ai" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="******" />
                    </div>
                </div>
                <div className='card-footer'>
                    <button onClick={()=>handleNavigation("/admin/dashboard")} className='button'>Login</button>
                </div>
               
            </div>
        </div>
    );
}

export default Admin;
