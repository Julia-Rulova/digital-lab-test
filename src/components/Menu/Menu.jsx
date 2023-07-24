import './Menu.css';

import ItemPopup from '../ItemPopup/ItemPopup';

import arrow from '../../images/arrow.svg';

export default function Menu() {
    return (
        <ul className='menu'>
            <li className='menu__item'>
                <p className='menu__text'>Demos</p>
                <img className='menu__dropdown' src={arrow} alt='раскрыть.' />

                <ItemPopup></ItemPopup>
            </li>
            <li className='menu__item'>
                <p className='menu__text'>Post</p>
                <img className='menu__dropdown' src={arrow} alt='раскрыть.' />

                <ItemPopup></ItemPopup>
            </li>
            <li className='menu__item'>
                <p className='menu__text'>Features</p>
                <img className='menu__dropdown' src={arrow} alt='раскрыть.' />

                <ItemPopup></ItemPopup>
            </li>
            <li className='menu__item'>
                <p className='menu__text'>Categories</p>
                <img className='menu__dropdown' src={arrow} alt='раскрыть.' />

                <ItemPopup></ItemPopup>
            </li>
            <li className='menu__item'>
                <p className='menu__text'>Shop</p>
                <img className='menu__dropdown' src={arrow} alt='раскрыть.' />

                <ItemPopup></ItemPopup>
            </li>
            <li className='menu__item'>
                <p className='menu__text'>Buy Now</p>
                <img className='menu__dropdown' src={arrow} alt='раскрыть.' />

                <ItemPopup></ItemPopup>
            </li>
        </ul>
    )
}