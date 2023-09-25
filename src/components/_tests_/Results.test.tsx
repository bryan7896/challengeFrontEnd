import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Details from '../details/Details';

const mockStore = configureStore([]);

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
            "details": "Raza de perro pastor"
        }
    },
};

test('Renderiza el componente Details correctamente', () => {
    const store = mockStore(initialState);

    const { getByText } = render(
        <Provider store={store}>
            <Details />
        </Provider>
    );

    expect(getByText('Anatolian Shepherd Dog')).toBeInTheDocument();
    expect(getByText('Raza de perro pastor')).toBeInTheDocument();
});
