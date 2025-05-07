import { useEffect, useState } from 'react';

export default function FlipCard({
    flipped,
    onClick,
    frontContent = (
        <img
            src="/images/rooted-deck-card-back.png"
            alt="Card back"
            className="w-full h-full object-cover rounded-md"
        />
    ),
    backContent,
    disabled = false,
}) {
    return (
        <div
            className={`card-container ${flipped ? 'flipped' : ''} ${disabled ? 'pointer-events-none' : ''}`}
            onClick={onClick}
        >
            <div className="card-inner">
                <div className="card-front">{frontContent}</div>
                <div className="card-back">{backContent}</div>
            </div>
        </div>
    );
}
