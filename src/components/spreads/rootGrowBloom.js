import { useState } from 'react';
import FlipCard from '../FlipCard';

export default function RootGrowBloom({ cards }) {
    console.log(cards);
    //Gets the list of cards and sets the flippedStates to false for each card
    const [flippedStates, setFlippedStates] = useState(cards.map(() => false));

    const handleFlip = (index) => {
        setFlippedStates((prev) =>
            prev.map((state, i) => (i === index ? !state : state))
        );
    };

    return (
        <>
            <div className="flex justify-center gap-10 mt-2 mb-8">
                {cards.map((card, index) => (
                    <FlipCard
                        key={card.id}
                        flipped={flippedStates[index]}
                        onClick={() => handleFlip(index)}
                        backContent={<div>{card.card.name}</div>}
                    />
                ))}
            </div>
        </>
    );
}
