import { Outlet } from 'react-router-dom';
import { HeaderMain } from '../components/HeaderMain';
import { FooterMain } from '../components/FooterMain';
import "react-toastify/dist/ReactToastify.css";              // ← Y asegúrate de tener el CSS
import { Bounce, ToastContainer } from 'react-toastify';


export const MainLayout = () => {
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
