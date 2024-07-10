import { useRouter } from "next/router";
import React, { useState } from "react";
import {toast} from 'react-toastify'
import useAuthLogin from "@/zustand/authLogin";

export default function Login() {
const [showPassword, setShowPassword] = useState(false)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const route = useRouter()
const { SetIsLogin } = useAuthLogin(state => state)

const handleShowPassword = () =>{
setShowPassword(!showPassword)
}

const doLogin = () => {
const corrEmail = 'test@email.com'
const corrPassword = 'password'

if(email === corrEmail && password === corrPassword){
localStorage.setItem("isLogin", "true")
//SetIsLogin(true)

toast.success('login success')
route.push('/')
} else {
toast.error('login failed')
}
}

return(
<div className="w-full h-[100vh] flex items-center justify-center">
    <div className="space-y-2">
        <form onSubmit={(e)=> {
            e.preventDefault()
            doLogin()
            }}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input required type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" onChange={(e)=>
                setEmail(e.target.value)}/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input required type={showPassword ? 'text' : 'password' } placeholder="Password"
                    className="input input-bordered w-full max-w-xs" onChange={(e)=> setPassword(e.target.value)} />
                <label className="label">
                    <span onClick={handleShowPassword}
                        className="label-text-alt cursor-pointer hover:underline">{showPassword ? 'Hide ' : 'Show '}
                        password</span>
                </label>
            </div>
            <button type="submit" className="btn btn-outline btn-primary w-full">Login</button>
        </form>
    </div>
</div>
)
}