// src/components/Search.tsx
import './styles.scss'
import React, { useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../slices/generalSlice';
import { useNavigate } from 'react-router-dom';
import ServicesApi from '../../api/services';

interface FormData {
    search: string;
}

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [get_pets] = ServicesApi.usePetsMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const getPets = useCallback(async (search: string) => {
        await get_pets(search);
        navigate('/results');
    }, [get_pets])

    const onSubmit: SubmitHandler<FormData> = (data) => {
        dispatch(setSearch(data.search));
        getPets(data.search)
    };

    return (
        <div className="containerSearch">
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ maxWidth: '700px', margin: '0 auto' }}
            >
                <div className="mb-3">
                    <label htmlFor="search" className="form-label fontText">
                        Búsqueda:
                    </label>
                    <input
                        type="text"
                        id="search"
                        {...register('search', { required: true })}
                        className="form-control input-search" // Aplica la clase para el campo de entrada
                    />
                    {errors.search && (
                        <div className="mt-2 text-danger fontText">Este campo es requerido.</div>
                    )}
                </div>
                <div className="d-grid" style={{ maxWidth: '300px', margin: '0 auto' }}>
                    <button
                        type="submit"
                        className="btn button-search fontText" // Aplica la clase para el botón
                    >
                        Buscar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Search;

