import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Game from './Game';
import { Deck } from './models/deck';
import {Card} from "./models/card";

jest.mock('./helpers/deck');
jest.mock('./helpers/card');

describe('Game', () => {
    beforeEach(() => {
        Deck.mockImplementation(() => ({
            getCards: () => [
                {suit: 'hearts', value: 'ace', cardImagePath: '/img/cards/ace-hearts.png'},
                {suit: 'hearts', value: 'king', cardImagePath: '/img/cards/king-hearts.png'},
                {suit: 'hearts', value: 'queen', cardImagePath: '/img/cards/queen-hearts.png'},
                {suit: 'hearts', value: 'jack', cardImagePath: '/img/cards/jack-hearts.png'},
                {suit: 'hearts', value: 'ten', cardImagePath: '/img/cards/ten-hearts.png'},
                {suit: 'hearts', value: 'nine', cardImagePath: '/img/cards/nine-hearts.png'},
                {suit: 'hearts', value: 'eight', cardImagePath: '/img/cards/eight-hearts.png'},
                {suit: 'hearts', value: 'seven', cardImagePath: '/img/cards/seven-hearts.png'},
                {suit: 'hearts', value: 'six', cardImagePath: '/img/cards/six-hearts.png'},
                {suit: 'hearts', value: 'five', cardImagePath: '/img/cards/five-hearts.png'},
                {suit: 'hearts', value: 'four', cardImagePath: '/img/cards/four-hearts.png'},
                {suit: 'hearts', value: 'three', cardImagePath: '/img/cards/three-hearts.png'},
                {suit: 'hearts', value: 'two', cardImagePath: '/img/cards/two-hearts.png'},
            ],
        }));
    });

    it('renders the correct number of cards', () => {
        render(<Game/>);
        const cards = screen.getAllByRole('button');
        expect(cards.length).toBe(13);
    });

    describe('Click Interactions', () => {
        beforeEach(() => {
            Card.mockImplementation(() => ({
                equals: () => false,

            }));
            Deck.mockImplementation(() => ({
                createDeck: () => {
                    this.cards = [
                        new Card('hearts', '3'),
                        new Card('hearts', '2')
                    ]
                },
                shuffleDeck: () => {
                    return true;
                },
                getCards: () => [
                    new Card('hearts', '3'),
                    new Card('hearts', '2')
                ],
            }));
        });

        it('flips cards when clicked', () => {
            render(<Game/>);
            const [card1, card2] = screen.getAllByRole('button');
            fireEvent.click(card1);
            fireEvent.click(card2);
            expect(card1).toHaveAttribute('alt', 'ace of hearts');
            expect(card2).toHaveAttribute('alt', 'king of hearts');
        });
    })
});