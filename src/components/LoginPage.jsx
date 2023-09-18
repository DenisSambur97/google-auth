import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import "../App.css"

function LoginPage() {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = 'http://localhost:3000';
    const redirectUriDepl = 'https://google-auth-inky.vercel.app/'
    const navigate = useNavigate();

    // console.log(clientId)

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
                clientId={clientId}
                buttonText="Авторизуйтесь при помощи Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                redirectUri={redirectUriDepl}
            />
        </div>
    );
}

export default LoginPage;
