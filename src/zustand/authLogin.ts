import {create} from 'zustand'

interface AuthState {
    token: string | null,
    isLogin: boolean,
    SetToken: (value: string) => void,
    SetIsLogin: (value: boolean) => void
}

const useAuthLogin = create<AuthState>((set) => ({
    token: null,
    isLogin: false,
    SetToken: (value: string) => set({token: value}),
    SetIsLogin: (value: boolean) => set({isLogin: value})
}))

export default useAuthLogin