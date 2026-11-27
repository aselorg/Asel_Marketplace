import './css/Header.css';

export default function Header() {
  return (
    <div className='header_wrapp'>
        <section className='header_section'>
            <h3 className='header_h3'>𓅝 Сообщество фламингосов</h3>
            <input className='header_input' type="text" />
        </section>
        <nav className='header_nav'>
            <p className='header_p'>🏠︎ Меню</p>
            <p className='header_p'>✉ Корзина</p>
            <p className='header_p'>⌕ Поиск</p>
        </nav>
    </div>
  )
}
