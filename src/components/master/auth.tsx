import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useAuthLogin from "@/zustand/authLogin";

type Props = {
    children: React.ReactNode
}

const Auth = ({children}: Props) => {
    const route = useRouter()
    const currentRoute = route.pathname
    const {isLogin}: any = useAuthLogin(state => state)

    useEffect(() => {
        const _isLogin = localStorage.getItem('isLogin') || isLogin
        if(_isLogin){
            route.push('/')
        }
    }, [currentRoute])

    return (
        <div>
            {children}
        </div>
    )
}

export default Auth