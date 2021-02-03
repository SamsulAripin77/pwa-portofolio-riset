import React, {useState} from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios'
import Card from '../../components/Card'
import Input from '../../components/Input'

function Login(props) {
    const { register, handleSubmit} = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const onSubmit = data => {
        let formData = new FormData()
        setLoading(true)
        formData.append('email', data.email)
        formData.append('password', data.password)
        axios({
            url: 'http://localhost:8000/api/auth/login',
            method: 'POST',
            data: formData,
            headers:{
                accept: 'application/json',
                contentType: 'application/json'
            }
        })
        .then(result => {
            setLoading(false)
            console.log(JSON.stringify(result.data.role));
            localStorage.setItem("login", JSON.stringify(result.data));
            if (result.data.role === 'admin'){
                props.history.push('/admin')
            }
            else {
                props.history.push('/user')
            }
        })
        .catch((error) => alert(error.response.data.message));
    }

    return (
        <form onSubmit=
        {handleSubmit(onSubmit)}>
            <Card title="Login" description="Selamat datang di E-Portofolio Mahasiswa">
            <Input type="email" name="email" title="masukan email anda" register={register}/>
            <Input type="password" name="password" title="masukan password anda" register={register} />
            </Card>
        </form>       
    );
}

export default Login;