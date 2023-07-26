import './ItemPopup.css';

import arrow from '../../images/arrow.svg';

export default function ItemPopup() {
    return (
        <article className='item-popup'>
            <ul className='item-popup__items'>
                <li className='item-popup__item'>
                    <p className='item-popup__text'>Post Header</p>
                    <img className='item-popup__arrow' src={arrow} alt='перейти.' />
                </li>
                <li className='item-popup__item'>
                    <p className='item-popup__text'>Post Layout</p>
                    <img className='item-popup__arrow' src={arrow} alt='перейти.' />
                </li>
                <li className='item-popup__item'>
                    <p className='item-popup__text'>Share Buttons</p>
                    <img className='item-popup__arrow' src={arrow} alt='перейти.' />
                </li>
                <li className='item-popup__item'>
                    <p className='item-popup__text'>Gallery Post</p>
                    <img className='item-popup__arrow' src={arrow} alt='перейти.' />
                </li>
                <li className='item-popup__item'>
                    <p className='item-popup__text'>Video Post</p>
                    <img className='item-popup__arrow' src={arrow} alt='перейти.' />
                </li>
            </ul>
        </article>
    )
}