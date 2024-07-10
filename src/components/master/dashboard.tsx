import React, { useEffect } from "react";
import Navbar from '../layout/navbar'
import LeftMenu from "../layout/leftMenu";
import { useRouter } from "next/router";
import useAuthLogin from "@/zustand/authLogin";

type Props = {
    children: React.ReactNode
}

const Dashboard = ({children}: Props) => {
    const route = useRouter()
    const currentRoute = route.pathname
    const {isLogin}: any = useAuthLogin(state => state)

    useEffect(() => {
        const _isLogin = localStorage.getItem('isLogin') || isLogin
        if(!_isLogin){
            route.push('/login')
        }
    }, [currentRoute])

    return (
        <div>
            <Navbar/>
            <LeftMenu>{children}</LeftMenu>
        </div>
    )
}

export default Dashboard