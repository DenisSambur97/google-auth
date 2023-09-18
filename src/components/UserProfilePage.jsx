import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function UserProfilePage() {
    const location = useLocation();
    const user = location.state && location.state.user;
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Информация о пользователе</h1>
            {user && (
                <div>
                    <img src={user.imageUrl} alt="User Avatar"/>
                    <p>Имя: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={handleLogout}>Выход</button>
                </div>
            )}
        </div>
    );
}

export default UserProfilePage;
