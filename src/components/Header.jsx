import { Link } from 'react-router-dom';
import './css/Header.css';

export default function Header() {
  return (
    <div className='header_wrapp'>
        <section className='header_section'>
            <h3 className='header_h3'>𓅝 Сообщество фламингосов</h3>
            <input className='header_input' type="text" />
        </section>
        <nav className='header_nav'>
            <Link to='/'>🏠︎ Главная</Link>
            <Link to='/basket'>✉ Корзина</Link>
            <Link to='/about'>🛈 О нас</Link>
        </nav>
    </div>
  )
}