  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import { BrowserRouter } from 'react-router-dom';
  import './index.css'
  import 'swiper/css';
  import {InsaludApp} from './InsaludApp.tsx'


  createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter basename='/quito'>
            <InsaludApp />
        </BrowserRouter>
    </StrictMode>,
  )
