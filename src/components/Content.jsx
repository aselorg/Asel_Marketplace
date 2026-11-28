import { Route, Routes } from 'react-router-dom';
import './css/Content.css';
import Cards from './Cards';
import Basket from './Basket';
import About from './About';

export default function Content() {
  return (
    <div className='content_wrapp'>
      <Routes> 
        <Route path='/' element={<Cards />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};