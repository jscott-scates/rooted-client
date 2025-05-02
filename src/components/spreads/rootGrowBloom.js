import FlipCard from "../FlipCard";

export default function RootGrowBloom ({cards}) {
    const [flippedIndex, setFlippedIndex] = useState(null)
    const card = cards?.card
    
    return <>
    {cards.map((card, index) => (
        <FlipCard
            key={card.id}
            flipped={flipped[index]}
            onClick={() => handleFlip(index)}
            backContent={<div>{card.name}</div>}
        />
        ))}
    </>
}