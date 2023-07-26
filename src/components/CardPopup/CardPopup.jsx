import './CardPopup.css';
import '../Card/Card.css';

export default function CardPopup({ card, popupOpen, onClose }) {
    const popupClassName = `card-popup ${popupOpen === true && 'card-popup_open'}`;

    return (
        <article className={popupClassName} onClick={e => (e.currentTarget === e.target) && onClose()}>
            <div className='card-popup__container'>
                <img
                    className='card__img card-popup__img'
                    src={card.img_2x}
                    srcSet={`${card.img_2x} 1240w, ${card.img} 768w`}
                    alt={card.title}
                />
                <div className='card__content'>
                    <span className='card__tag'>{card.tags}</span>
                    <h3 className='card__title'>{card.title}</h3>

                    <div className='card__info-container'>
                        <p className='card__info-text card__info-text_span'>{card.autor}</p>
                        <div className='card__dot' />
                        <p className='card__info-text'>{card.date}</p>
                        <div className='card__dot' />
                        <p className='card__info-text'>{card.views}</p>
                    </div>

                    <p className='card__paragraph'>{card.text}</p>
                </div>
            </div>
        </article>
    )
}