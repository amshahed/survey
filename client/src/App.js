import React from 'react'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './setupTheme';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import { AuthProvider } from './contexts/AuthContext';

let App = () => {
    return (
        <>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
                <AuthProvider>
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </MuiThemeProvider>
        </>
    );
}

export default App;