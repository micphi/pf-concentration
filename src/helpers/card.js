import suitColors from "./suitColors";

/**
 * Class representation of a playing card.
 */
export class Card {
    constructor(suit, value) {
        this.equals = this.equals.bind(this);
        this.suit = suit;
        this.value = value;
    }

    /**
     * @returns {string} - The card suit
     */
    getSuit() {
        return this.suit;
    }

    /**
     * @returns {string} - The card value
     */
    getValue() {
        return this.value;
    }

    /**
     * @returns {string} - String representation of the card
     */
    getCardName() {
        return `${this.value} of ${this.suit}`;
    }

    /**
     * Checks for equality using both the suit color and card value
     *
     * @param other
     * @returns {boolean}
     */
    equals(other) {
        return this.value === other.value && suitColors.get(this.suit) === suitColors.get(other.suit);
    }

    /**
     * Returns the path for the card's image.
     *
     * @returns {string}
     */
    get cardImagePath() {
        return `/img/cards/${this.value}_of_${this.suit}.png`;
    }
}