import { useEffect, useState } from "react"

export default function FlipCard({
    flipped,
    onClick,
    frontContent = <span className="text-2xl">🂠</span>,
    backContent,
    disabled = false,
    }) 
    {
        return (
          <div
            className={`card-container ${flipped ? 'flipped' : ''} ${disabled ? 'pointer-events-none' : ''}`}
            onClick={onClick}
          >
            <div className="card-inner">
              <div className="card-front">
                {frontContent}
              </div>
              <div className="card-back">
                {backContent}
              </div>
            </div>
          </div>
        )
}