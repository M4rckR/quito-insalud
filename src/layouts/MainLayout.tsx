import {Outlet, useLocation} from 'react-router-dom';
import { HeaderMain } from '../components/HeaderMain';
import { FooterMain } from '../components/FooterMain';
import "react-toastify/dist/ReactToastify.css";
import TagManager from 'react-gtm-module';
import { Bounce, ToastContainer } from 'react-toastify';
import {useEffect} from "react";
import {trackPageview} from "../lib/analytics.ts";

export const MainLayout = () => {
    const location = useLocation()

    useEffect(() => {
        if(location) {
            TagManager.dataLayer({
                dataLayer: {
                    event: 'pageview',
                    page: location.pathname,
                    title: document.title
                }
            });
            trackPageview(location.pathname)
        }
    }, [location]);



  return (
    <div className='flex flex-col min-h-screen'>
        <HeaderMain/>
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
        <main className='flex-grow'>
            <Outlet/>
        </main>

        <FooterMain/>
    </div>
  )
}
