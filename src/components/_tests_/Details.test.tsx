import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Details from '../details/Details';
import configureStore from 'redux-mock-store'

const mockStore = configureStore();

describe('Details Component', () => {
    it('should render details correctly', () => {
        const initialState = {
            general: {
                details: {
                    "_id": "65109b5e304c36aab1986c71",
                    "breed": "Anatolian Shepherd Dog",
                    "weight": "60 kg",
                    "maleHeight": "70 cm",
                    "femaleHeight": "65 cm",
                    "colors": "blanco",
                    "origin": "Turquía",
                    "urlImg": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwlea_I6f_Gr1nnqnIvB1QAHirpryGKVzPsJKy5erJjRvxHDAip3H1_TOzrY-B",
                    "details": "Raza de perro pastor, de pelaje **largo y denso**, originario de Turquía. Es un perro fuerte y protector, con un carácter leal y cariñoso."
                }
            },
        };

        const store = mockStore(initialState);

        const { getByText, getByAltText } = render(
            <Provider store={store}>
                <Details />
            </Provider>
        );

        expect(getByText('Anatolian Shepherd Dog')).toBeInTheDocument();
        expect(getByText('Peso: 60 kg')).toBeInTheDocument();
        expect(getByText('Altura máxima macho: 70 cm')).toBeInTheDocument();
        expect(getByText('Altura máxima hembra: 65 cm')).toBeInTheDocument();
        expect(getByText('Colores: blanco')).toBeInTheDocument();
        expect(getByText('Origen: Turquía')).toBeInTheDocument();
        expect(getByAltText('Imágen de la mascota buscada')).toBeInTheDocument();
        expect(getByText('Información sobre la raza')).toBeInTheDocument();
    });
});
