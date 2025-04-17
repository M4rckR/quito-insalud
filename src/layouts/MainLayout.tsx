import { Outlet } from 'react-router-dom';
import { HeaderMain } from '../components/HeaderMain';

export const MainLayout = () => {
  return (
    <div>
        <HeaderMain/>

        <main>
            <Outlet/>
        </main>

        <footer>Este es el footer</footer>
    </div>
  )
}
