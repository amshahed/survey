import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

let Home = () => {
    let { token } = useContext(AuthContext)

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <h1>Home</h1>
    )
}

export default Home;
