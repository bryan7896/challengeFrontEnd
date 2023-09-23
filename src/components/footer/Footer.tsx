// src/components/Footer.tsx
import React, { useEffect, useState } from 'react';
// import {ReactComponet as IconoSvg} from '../../assets/iconSupport.svg';

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
        <footer className="text-center text-lg-start bg-light text-muted fixed-bottom">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-top">
                <div className="me-5 d-none d-lg-block">
                    <span>Página de presentación de prueba de ingreso FICOHSA:</span>
                </div>
                <span>{horaActual}</span>
            </section>
            <section className="bg-light">
                <div className="container text-center mt-2">
                    <h6 className="text-uppercase fw-bold mb-1">
                        <i className="fas fa-gem me-3 text-secondary"></i>{name}
                    </h6>
                    <p><i className="fas fa-phone text-secondary"></i> {phoneNumber}</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
