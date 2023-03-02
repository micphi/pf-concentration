/**
 * React component visually representing a single card from the "concentration" game.
 *
 * @param card
 * @param onClick
 * @param isFlipped
 * @param isMatched
 * @returns {JSX.Element}
 * @constructor
 */
export default function GameCard({ card, onClick, isFlipped, isMatched }) {
    const { suit, value,  } = card;

    return (
        <div className="card" onClick={onClick}>
            <div className="card-image">
                {
                isFlipped || isMatched ?
                    <img src={card.cardImagePath} alt={`${value} of ${suit}`} />
                :
                    <img src={`/img/cards/back.png`} alt="Mystery Card" />
                }
            </div>
        </div>
    );
}