// src/components/Results.tsx
import './styles.scss'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import Card from '../card/Card';

const Results: React.FC = () => {
    const navigate = useNavigate();

    const searchValue = useSelector((state: RootState) => state.general.search);
    const response: any = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    const details = () => {
        console.log('--test')
        navigate('/details');
    }

    return (
        <div className='mt-5'>
            <h1 className='d-flex justify-content-center fontText'>
                Resultados de la búsqueda "{searchValue}"
            </h1>
            <div className='justify-content-center mb-25 row'>
                {response.map((v: any, i: number) => (
                    <Card key={`btn-${i}`} onClick={() => details()} />
                ))}
            </div>
        </div>
    );
};

export default Results;
