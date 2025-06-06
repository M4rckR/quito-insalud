import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: 'GTM-P2LZ9HSB',
};


export const InsaludApp = () => {


  useEffect(() => {
    AOS.init({
      duration: 800, // duración de la animación en ms
      once: false     // solo se anima una vez
    });
    TagManager.initialize(tagManagerArgs)
  }, []);



  return (
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>} />
        </Route>
    </Routes>
    
  )
}
