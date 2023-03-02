import {Card} from "./card";

/**
 * Class representation of a deck of cards.
 */
export class Deck {
    constructor() {
        this.suits = ["hearts", "diamonds", "clubs", "spades"];
        this.values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
        this.cards = [];
        this.shuffleDeck = this.shuffleDeck.bind(this);
        this.getCards = this.getCards.bind(this);
        this.createDeck();
        this.shuffleDeck();
    }

    /**
     * @returns {[]} - All cards found in the deck
     */
    getCards() {
        return this.cards;
    }

    /**
     * Populate the deck with playing cards.
     */
    createDeck() {
        for (let suit of this.suits) {
            for (let value of this.values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }

    /**
     * Shuffles the contents of the deck using the Fisher-Yates shuffling algorithm.
     *
     * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
     */
    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}