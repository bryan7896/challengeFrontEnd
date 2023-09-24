import React from 'react';
import ImgPet from '../../assets/pet.png';
import './styles.scss';

const Header: React.FC = () => {
    return (
        <header className="colorBorder pt-1 pb-1">
            <section className="d-flex justify-content-center">
                <img src={ImgPet} height={70} width={70} alt="Logo de pet" />
                <h1 className="header-title text-white fontText">challenge front end</h1>
                <img src={ImgPet} height={70} width={70} alt="Logo de pet" />
            </section>
        </header>
    );
};

export default Header;
