// src/components/Card.tsx
import { PetsList } from '../../slices/generalSlice.types';
import './styles.scss'
import React from 'react';

interface CardProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    pet: PetsList
}

const Card: React.FC<CardProps> = ({ onClick, pet }) => {
   
    return (
        <div className="our_solution_category col-auto">
            <div className="solution_cards_box">
                <div className="solution_card">
                    <div className="hover_color_bubble"></div>
                    <img src={pet?.urlImg} width={55} height={55} style={{ borderRadius: 60 }} />
                    <div className="solu_title">
                        <h3>{pet.breed}</h3>
                    </div>
                    <div className="solu_description">
                        <p>{pet.details}</p>
                        <button onClick={onClick} type="button" className="read_more_btn">Ver más detalles</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
