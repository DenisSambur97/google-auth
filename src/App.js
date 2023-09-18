import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UserProfilePage from './components/UserProfilePage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
    );
}

export default App;
