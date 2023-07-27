import './Menu.css';

import { useEffect, useState } from 'react';

import ItemPopup from '../ItemPopup/ItemPopup';

import arrow from '../../images/arrow.svg';
import logo from '../../images/logo.svg';

export default function Menu({ menuOpen, onClose }) {
    const [lastScroll, setLastScroll] = useState(0);
    const [showMenu, setShowMenu] = useState(true);
    const menuItems = ['Demos', 'Post', 'Features', 'Categories', 'Shop', 'Buy Now'];
    const menuClassName = `menu ${menuOpen === true && 'menu_open'} ${!showMenu && 'menu_static'}`;

    function handleShowMenu() {
        let windowPosition = window.scrollY;

        if (windowPosition > lastScroll && windowPosition >= 200) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }

        setLastScroll(windowPosition);
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleShowMenu);

            return () => {
                window.removeEventListener('scroll', handleShowMenu);
            };
        }
    }, [lastScroll]);

    return (
        <article className={menuClassName} onClick={e => (e.currentTarget === e.target && menuOpen === true) && onClose()}>
            <div className='menu__content'>
                {
                    menuOpen === true &&
                    <div className='menu__top'>
                        <img className='menu__logo' src={logo} alt='логотип.' />
                        <button className='menu__close-btn' type='button' onClick={onClose} />
                    </div>
                }

                <ul className='menu__list'>
                    {menuItems.map((item) => (
                        <li className='menu__item' key={item}>
                            <div className='menu__item-top'>
                                <p className='menu__text'>{item}</p>
                                {item !== 'Buy Now' &&
                                    <img className='menu__dropdown' src={arrow} alt='раскрыть.' />
                                }
                            </div>

                            <div className='menu__popup'>
                                <ItemPopup></ItemPopup>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}