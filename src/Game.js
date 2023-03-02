import {useState} from "react";
import GameCard from "./GameCard";
import {Deck} from "./models/deck";
import ReactConfetti from "react-confetti";

/**
 * React component representing a game of "concentration".
 * @returns {JSX.Element}
 * @constructor
 */
export default function Game() {
    const [cards, setCards] = useState((new Deck()).getCards());
    // The face-up cards that haven't yet been matched. Max 2 at a time.
    const [flippedCards, setFlippedCards] = useState([]);
    // # of found matches - could probably use matched cards array, but that wasn't a thing at first so we'll leave
    // this until I can adjust that bit
    const [matchedPairs, setMatchedPairs] = useState(0);
    // All cards for which a match have been found.
    const [matchedCards, setMatchedCards] = useState([]);
    // Number of guesses the player has made so far.
    const [guesses, setGuesses] = useState(0);

    /**
     * @param card
     */
    function handleCardClick(card) {
        if (flippedCards.length === 2 || flippedCards.includes(card) || matchedCards.includes(card)) {
            return;
        }

        const newFlippedCards = [...flippedCards, card];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            setGuesses(guesses + 1);
            const firstFlippedCard = newFlippedCards[0];
            const secondFlippedCard = newFlippedCards[1];

            if (firstFlippedCard.equals(secondFlippedCard)) {
                setMatchedPairs(matchedPairs + 1);
                setMatchedCards(matchedCards.concat(newFlippedCards));
                setFlippedCards([]);

            } else {
                setTimeout(() => {
                    setFlippedCards([]);
                }, 500);
            }
        }
    }

    return (
            <div className="game">
                {cards.length === matchedCards ? <ReactConfetti /> : <></>}
                <div className="score">Pairs Matched: {matchedPairs}</div>
                <div className="score">Pairs Remaining: {(cards.length - matchedPairs * 2) / 2}</div>
                <div className="score">Guesses: {guesses}</div>
                <div className="board">
                    {cards.map(card => (
                        <GameCard
                            key={card.suit + card.value}
                            isFlipped={flippedCards.includes(card)}
                            card={card}
                            onClick={() => handleCardClick(card)}
                            isMatched={matchedCards.includes(card)}
                        />
                    ))}
                </div>
            </div>
    );
}