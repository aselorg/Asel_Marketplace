import { Route } from 'react-router-dom';
import './css/Content.css';
import Cards from './Cards';
import Basket from './Basket';
import About from './About';

export default function Content() {
  return (
    <div className='content_wrapp'>
        <Route path='/' element={<Cards />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/about' element={<About />} />
    </div>
  );
};