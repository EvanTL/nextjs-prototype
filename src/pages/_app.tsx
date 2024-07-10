import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from '@/components/master/dashboard';
import { useRouter } from 'next/router';
import Auth from '@/components/master/auth';

export default function App({ Component, pageProps }: AppProps) {
  const route = useRouter()
  const currentRoute = route.pathname

  let authRoute = ["/login", "/register"]

  const MasterLayout = () => {
    if (authRoute.includes(currentRoute)){
      return (
      <Auth>
        <Component {...pageProps}/>
      </Auth>
      )
    } else {
      return(
      <Dashboard>
        <Component {...pageProps}/>
      </Dashboard>
      )
    }
  }

  return(
    <div>
      <ToastContainer/>
      <MasterLayout/>
    </div>
  ) 
}
