import { Deck } from "./deck";
import { Card } from "./card";

describe("Deck class tests", () => {
    let deck;

    beforeEach(() => {
        deck = new Deck();
    });

    test("getCards() returns an array of 52 cards", () => {
        const cards = deck.getCards();
        expect(cards).toBeInstanceOf(Array);
        expect(cards.length).toBe(52);
        expect(cards[0]).toBeInstanceOf(Card);
    });

    test("createDeck() creates a deck of 52 cards with the correct suits and values", () => {
        deck.createDeck();
        const cards = deck.getCards();
        const suits = ["hearts", "diamonds", "clubs", "spades"];
        const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];

        expect(cards).toHaveLength(52);

        for (let suit of suits) {
            for (let value of values) {
                const card = new Card(suit, value);
                expect(cards).toContainEqual(card);
            }
        }
    });

    test("shuffleDeck() shuffles the deck using the Fisher-Yates algorithm", () => {
            const originalCards = deck.getCards();
            deck.shuffleDeck();
            const shuffledCards = deck.getCards();
            expect(shuffledCards).not.toEqual(originalCards);
    });
});