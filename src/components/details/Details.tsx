import './styles.scss'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Details: React.FC = () => {
    const detailsValue = useSelector((state: RootState) => state.general.details);

    return (
        <div>
            <h1 className='d-flex justify-content-center mt-2'>{detailsValue?.breed}</h1>
            <p className='d-flex justify-content-center'>{detailsValue?.details}</p>

            <div className="container">
                <img
                    src={detailsValue?.urlImg}
                    alt="Imágen de la mascota buscada"
                    className="img-fluid"
                    style={{ borderRadius: 20, maxWidth: 400 }}
                />  
                <div className="ml-3 content">
                    <h3 className='d-flex justify-content-center'>Información sobre la raza</h3>
                    <p className='d-flex justify-content-center'>Peso: {detailsValue?.weight}</p>
                    <h4 className='d-flex justify-content-center text-decoration-underline'>Altura</h4>
                    <p className='d-flex justify-content-center'>Altura máxima macho: {detailsValue?.maleHeight}</p>
                    <p className='d-flex justify-content-center'>Altura máxima hembra: {detailsValue?.femaleHeight}</p>
                    <h4 className='d-flex justify-content-center text-decoration-underline'>Colores</h4>
                    <p className='d-flex justify-content-center'>Colores: {detailsValue?.colors}</p>
                    <h4 className='d-flex justify-content-center text-decoration-underline'>Origen</h4>
                    <p className='d-flex justify-content-center'>Origen: {detailsValue?.origin}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
