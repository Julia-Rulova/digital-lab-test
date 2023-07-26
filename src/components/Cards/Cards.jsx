import './Cards.css';

import Card from '../Card/Card';

export default function Cards({ cards, cardClick }) {
    return (
        <ul className='cards'>
            {cards.map((card) => (
                <Card
                    key={card.title}
                    card={card}
                    cardClick={cardClick}
                ></Card>
            ))}
        </ul>
    )
}