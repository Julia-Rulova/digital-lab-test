import './Card.css';

export default function Card({ card, cardClick }) {
    function handleCardClick() {
        cardClick(card)
    }

    return (
        <article className='card' onClick={handleCardClick}>
            <img
                className='card__img'
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
        </article>
    )
}