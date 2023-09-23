// src/components/Footer.tsx
import './styles.scss'
import React, { useEffect, useState } from 'react';
import { ReactComponent as IconoSvg } from '../../assets/iconSupport.svg';

interface FooterProps {
    phoneNumber: string;
    name: string;
}

const Footer: React.FC<FooterProps> = ({ phoneNumber, name }) => {

    const [horaActual, setHoraActual] = useState<string>('');

    useEffect(() => {
        const obtenerHoraActual = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        };
        const interval = setInterval(() => {
            setHoraActual(obtenerHoraActual());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="text-center text-lg-start bg-light text-muted fixed-bottom colorBorder">
            <section className="d-flex justify-content-center justify-content-lg-between pt-2" style={{ paddingInline: 20 }}>
                <div className="me-5 d-none d-lg-block">
                    <span className='fontText'>Página de presentación de prueba de ingreso FICOHSA:</span>
                </div>
                <span>{horaActual}</span>
            </section>
            <section className="bg-light">
                <div className="text-center">
                    <IconoSvg width={40} height={40} />
                    <div className="text-center">
                        <h6 className="text-uppercase fw-bold mb-1">
                            <i className="fas fa-gem me-3 text-secondary fontText"></i>{name}
                        </h6>
                        <p><i className="fas fa-phone text-secondary fontText"></i> {phoneNumber}</p>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
