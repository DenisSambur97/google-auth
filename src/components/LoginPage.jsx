import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import "../App.css"

function LoginPage() {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = 'http://localhost:3000';
    const navigate = useNavigate();

    console.log(clientId)

    const responseGoogle = (response) => {
        if (response.accessToken) {
            // Сохранение данных пользователя и токен в состоянии или хранилище
            const user = {
                name: response.profileObj.name,
                email: response.profileObj.email,
                imageUrl: response.profileObj.imageUrl,
            };
            // Перенаправление пользователя на страницу профиля, используя navigate
            console.log('has');
            navigate('/profile', { state: { user } });
        }
        else {
            console.log('error')
        }
    };

    return (
        <div className="App">
            <h1>Авторизация</h1>
            <GoogleLogin
                clientId='709313181868-4p944l6in3gqid9ek6qda8advv2gsh7m.apps.googleusercontent.com'
                buttonText="Авторизуйтесь при помощи Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                redirectUri={redirectUri}
            />
        </div>
    );
}

export default LoginPage;
