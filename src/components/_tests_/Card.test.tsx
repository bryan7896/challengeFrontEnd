import { render, fireEvent } from '@testing-library/react';
import Card from '../card/Card';

describe('Card component', () => {
    const mockPet = {
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

    it('renders without crashing', () => {
        const onClick = jest.fn();
        render(<Card onClick={onClick} pet={mockPet} />);
    });

    it('calls onClick when the button is clicked', () => {
        const onClick = jest.fn();
        const { getByText } = render(<Card onClick={onClick} pet={mockPet} />);
        fireEvent.click(getByText('Ver más detalles'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
