import './App.css';
import Header from './components/Header';
import Content from './components/Content';

{/* <Link to='/'>На главную</Link> */}
{/* <Link to='/basket'>Корзина</Link> */}
{/* <Link to='/about'>О нас</Link> */}

{/* <Route path='/' element={} /> */}
{/* <Route path='/basket' element={} /> */}
{/* <Route path='/about' element={} /> */}

export default function App() {
  return (
    <div className='app_wrapp'>
        <Header />
        <Content />
    </div>
  )
}