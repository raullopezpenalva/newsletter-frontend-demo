import React from "react";
import type { CardArray } from "../../data/home-how-i-think-cards";

interface CardProps {
    card: CardArray;
}

const Card: React.FC<CardProps> = ({ card }) => {
    const Icon = card.icon;
    return (
        <article className="card">
            <h3>{card.title}</h3>
            <Icon className="card-icon" />
            <p>{card.description}</p>
        </article>
    );
};

export default Card;