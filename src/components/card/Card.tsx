// src/components/Card.tsx
import './styles.scss'
import React from 'react';

interface CardProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    // name: string;
    // details: string;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
    const imgUrl = 'https://www.eltiempo.com/files/image_640_428/uploads/2023/04/05/642daa1edf8de.png';
    const name = 'Doberman';
    const details = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

    return (
        <div className="our_solution_category col-auto">
            <div className="solution_cards_box">
                <div className="solution_card">
                    <div className="hover_color_bubble"></div>
                    <img src={imgUrl} width={55} height={55} style={{ borderRadius: 60 }} />
                    <div className="solu_title">
                        <h3>{name}</h3>
                    </div>
                    <div className="solu_description">
                        <p>{details}</p>
                        <button onClick={onClick} type="button" className="read_more_btn">Ver más detalles</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
