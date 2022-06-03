import React from 'react'
import axios from 'axios'

import {useNavigate} from "react-router-dom" 

import './login.scss'

import {Paper, Input, Text, Button} from '../../ui'

import {useAuth} from '../../../context/user'

export default function LoginPage () {

    const [email, setEmail] = React.useState('')

    const {SetUserData, SetUserToStorage, user} = useAuth() 

    const navigate = useNavigate()

    async function LogIn() {
        await axios.post('http://localhost:5000/api/user/login', {email})
        .then(res => {
            if(res.data) {
                SetUserData(res.data)
                SetUserToStorage(res.data)
                navigate('/')
            }
        })
        .catch(e => console.log(e))
    } 

    React.useEffect(() => {
        if(user && user._id) {
            navigate('/')
        }
    }, [user])
    

    return (
    <div className="loginpage">
        <Paper shadow="large" className="login__header">
            <Button onClick={() => navigate(-1)} size="small">Back</Button>
        </Paper>
        <Paper shadow="large" className="login__wrapper">
            <div>
                <Text variant="h4">Login</Text>
            </div>
            <div className="login__content">
                <Input
                    placeholder="email"
                    variant="outlined"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    size="large"
                    fullWidth
                />
                <Button variant="contained" fullWidth onClick={LogIn}>SignIn</Button>
            </div>
        </Paper>
    </div>
    )
}