// src/components/Details.tsx
import './styles.scss'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Details: React.FC = () => {
    const detailsValue = useSelector((state: RootState) => state.general.details);

    return (
        <div>
            <h2 className='d-flex justify-content-center mt-2'>{detailsValue?.breed}</h2>
            <p className='d-flex justify-content-center'>{detailsValue?.details}</p>

            <div className="container">
                <img
                    src={detailsValue?.urlImg}
                    alt="Descripción de la imagen"
                    className="img-fluid"
                    style={{ borderRadius: 20, maxWidth: 400 }}
                />
                <div className="ml-3 content">
                    <p className='d-flex justify-content-center'>Peso: {detailsValue?.weight}</p>
                    <p className='d-flex justify-content-center text-decoration-underline'>Altura</p>
                    <p className='d-flex justify-content-center'>Altura máxima macho: {detailsValue?.maleHeight}</p>
                    <p className='d-flex justify-content-center'>Altura máxima hembra: {detailsValue?.femaleHeight}</p>
                    <p className='d-flex justify-content-center'>Colores: {detailsValue?.colors}</p>
                    <p className='d-flex justify-content-center'>Origen: {detailsValue?.origin}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
