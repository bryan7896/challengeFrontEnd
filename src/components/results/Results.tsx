// src/components/Results.tsx
import './styles.scss'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import Card from '../card/Card';
import { PetsList } from '../../slices/generalSlice.types';
import { setDetails } from '../../slices/generalSlice';

const Results: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchValue = useSelector((state: RootState) => state.general.search);
    const petsList = useSelector((state: RootState) => state.general.petsList);

    const details = (pet: PetsList) => {
        dispatch(setDetails(pet));
        navigate('/details');
    }

    return (
        <div className='mt-5'>
            <h1 className='d-flex justify-content-center fontText'>
                Resultados de la búsqueda "{searchValue}"
            </h1>
            <div className='justify-content-center mb-25 row'>
                {petsList.map((pet: PetsList, i: number) => (
                    <Card pet={pet} key={`btn-${i}`} onClick={() => details(pet)} />
                ))}
            </div>
        </div>
    );
};

export default Results;
