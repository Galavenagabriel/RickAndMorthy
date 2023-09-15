import { useState } from 'react'


function validate(userData) {
    const errors = {};
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const regexPassword = /\d/;
    const { email, password } = userData;


    if (!email) errors.email = "Ingresa tu correo electrónico";
    if (email.length > 35 || !regexEmail.test(email))   errors.email = "Correo electrónico invalido";

    if (!regexPassword.test(password)) errors.password = "Debe contener al menos un numero";
    if (password.length < 6 || password.length > 10) errors.password = "Debe contener entre 6 y 10 caracteres"

}


export default function LoginForm (props) {
    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    })
    const { login } = props;


    
    function handleChange (event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        login(userData);
    }



    return (
        <form>

            <label>Email:</label>
            <input 
                name='email' 
                type='text' 
                placeholder='Ingrese su correo electronico' 
                value={userData.email}
                onChange={handleChange}
            ></input>

            <label>Password:</label>
            <input 
                name='password' 
                type='password' 
                placeholder='Ingrese su contraseña' 
                value={userData.password}
                onChange={handleChange}
            ></input>

            <button type='submit' onClick={handleSubmit} >Submit</button>

        </form>
    )

}