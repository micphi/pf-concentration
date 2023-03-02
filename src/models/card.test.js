import suitColors from "../helpers/suitColors";
import { Card } from "./card";

describe("Card class tests", () => {
    const card1 = new Card("hearts", "7");
    const card2 = new Card("diamonds", "7");
    const card3 = new Card("hearts", "8");

    test("getSuit() returns the correct suit", () => {
        expect(card1.getSuit()).toBe("hearts");
        expect(card2.getSuit()).toBe("diamonds");
        expect(card3.getSuit()).toBe("hearts");
    });

    test("getValue() returns the correct value", () => {
        expect(card1.getValue()).toBe("7");
        expect(card2.getValue()).toBe("7");
        expect(card3.getValue()).toBe("8");
    });

    test("getCardName() returns the correct string representation of the card", () => {
        expect(card1.getCardName()).toBe("7 of hearts");
        expect(card2.getCardName()).toBe("7 of diamonds");
        expect(card3.getCardName()).toBe("8 of hearts");
    });

    test("equals() returns true when comparing cards with the same suit and value", () => {
        expect(card1.equals(card2)).toBe(true);
        expect(card1.equals(card3)).toBe(false);
        expect(card2.equals(card3)).toBe(false);
    });

    test("cardImagePath returns the correct path for the card's image", () => {
        expect(card1.cardImagePath).toBe("/img/cards/7_of_hearts.png");
        expect(card2.cardImagePath).toBe("/img/cards/7_of_diamonds.png");
        expect(card3.cardImagePath).toBe("/img/cards/8_of_hearts.png");
    });
});