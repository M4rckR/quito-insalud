import { Outlet } from 'react-router-dom';
import { HeaderMain } from '../components/HeaderMain';
import { FooterMain } from '../components/FooterMain';

export const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <HeaderMain/>

        <main className='flex-grow'>
            <Outlet/>
        </main>

        <FooterMain/>
    </div>
  )
}
