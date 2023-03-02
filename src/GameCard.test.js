import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GameCard from './GameCard';

const mockCard = {
    suit: 'hearts',
    value: 'ace',
    cardImagePath: '/img/cards/ace-hearts.png'
};

describe('GameCard', () => {
    it('renders with back of card when not flipped', () => {
        const { getByAltText } = render(<GameCard card={mockCard} />);
        const cardBack = screen.getByAltText('Mystery Card');
        expect(cardBack).toBeInTheDocument();
    });

    it('renders with front of card when flipped', () => {
        const { getByAltText } = render(<GameCard card={mockCard} isFlipped />);
        const cardFront = screen.getByAltText('ace of hearts');
        expect(cardFront).toBeInTheDocument();
    });
});