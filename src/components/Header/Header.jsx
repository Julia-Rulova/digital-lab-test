import './Header.css';

import logo from '../../images/logo.svg'

export default function Header({ onSearch, openMenu }) {
    function handleSearch() {
        onSearch();
    }

    return (
        <header className='header'>
            <button className='header__menu-btn' type='button' onClick={openMenu}></button>
            <img className='header__logo' src={logo} alt='логотип.' />
            <button className='header__search-btn' type='button' onClick={handleSearch}></button>
        </header>
    )
}