// src/components/Details.tsx
import './styles.scss'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Details: React.FC = () => {
    const searchValue = useSelector((state: RootState) => state.general.search);
    const imgUrl = 'https://www.eltiempo.com/files/image_640_428/uploads/2023/04/05/642daa1edf8de.png';

    return (
        <div>
            <h2 className='d-flex justify-content-center mt-2'>{searchValue}</h2>
            <p className='d-flex justify-content-center'>Datos curiosos: sdfsdfsdf</p>

            <div className="container">
                <img
                    src={imgUrl}
                    alt="Descripción de la imagen"
                    className="img-fluid"
                    style={{ borderRadius: 20, maxWidth: 400 }}
                />
                <div className="ml-3 content">
                    <p className='d-flex justify-content-center'>Peso: 34kg</p>
                    <p className='d-flex justify-content-center text-decoration-underline'>Altura</p>
                    <p className='d-flex justify-content-center'>Altura máxima macho: </p>
                    <p className='d-flex justify-content-center'>Altura máxima hembra: </p>
                    <p className='d-flex justify-content-center'>Colores: </p>
                    <p className='d-flex justify-content-center'>Origen: </p>
                </div>
            </div>
        </div>
    );
};

export default Details;
