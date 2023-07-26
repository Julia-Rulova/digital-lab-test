import './Menu.css';

import ItemPopup from '../ItemPopup/ItemPopup';

import arrow from '../../images/arrow.svg';
import logo from '../../images/logo.svg';

export default function Menu({ menuOpen }) {
    const menuItems = ['Demos', 'Post', 'Features', 'Categories', 'Shop', 'Buy Now'];
    const menuClassName = `menu ${menuOpen === true && 'menu_open'}`;

    return (
        <article className={menuClassName}>
            <div className='menu__content'>
                {
                    menuOpen === true &&
                    <div className='menu__top'>
                        <img className='menu__logo' src={logo} alt='логотип.' />
                        <button className='menu__close-btn' type='button' />
                    </div>
                }

                <ul className='menu__list'>
                    {menuItems.map((item) => (
                        <li className='menu__item' key={item}>
                            <p className='menu__text'>{item}</p>
                            {item !== 'Buy Now' &&
                                <img className='menu__dropdown' src={arrow} alt='раскрыть.' />
                            }

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