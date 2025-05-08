import { useState } from 'react';
import FlipCard from '../FlipCard';

export default function DailySeed({ cards }) {
    const [flippedIndex, setFlippedIndex] = useState(null);
    const card = cards[0]?.card;

    console.log(card);
    return (
        <div className="flex justify-center gap-10 mt-2 mb-8">
            {[0, 1, 2].map((_, index) => (
                <FlipCard
                    key={index}
                    flipped={flippedIndex === index}
                    onClick={() =>
                        flippedIndex === null && setFlippedIndex(index)
                    }
                    backContent={
                        <div className="text-center">
                            <h3 className="font-bold">{card?.name}</h3>
                            <div>
                                {card.keywords?.map((keyword) => (
                                    <li key={`${index}-${keyword.label}`}>
                                        {' '}
                                        {keyword.label}
                                    </li>
                                ))}
                            </div>
                            <p className="text-sm">{card?.meaning}</p>
                        </div>
                    }
                />
            ))}
        </div>
    );
}
