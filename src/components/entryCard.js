import FlipCard from './FlipCard';

export default function EntryCardDisplay({ cards }) {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {cards?.map((card) => (
                <FlipCard
                    key={card.id}
                    flipped={true}
                    frontContent={
                        <img
                            src="/images/rooted-deck-card-back.png"
                            alt="Card back"
                            className="w-40 h-64 object-cover rounded-lg shadow-md"
                        />
                    }
                    backContent={
                        <div className="w-40 h-64 flex items-center justify-center bg-white rounded-lg shadow-md p-4 text-center">
                            <p className="font-body text-lg">
                                {card.card.name}
                            </p>
                        </div>
                    }
                    disabled={true}
                    onClick={() => {}}
                />
            ))}
        </div>
    );
}
