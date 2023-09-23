// src/components/Header.tsx
import React from 'react';
import ImgPet from '../../assets/pet.png';
import './styles.scss'

const Header: React.FC = () => {
    return (
        <header className="colorBorder pt-1 pb-1">
            <section className="d-flex justify-content-center">
                <img src={ImgPet} height={70} width={70} />
            </section>
        </header>
    );
};
export default Header;
