// src/components/Search.tsx
import React from 'react';
import Footer from '../footer/Footer';

const Search: React.FC = () => {
    return (
        <div>
            <h1>Search Component</h1>
            <button type="button" className="btn btn-primary">Primary</button>
            <Footer name='Bryan Sandoval' phoneNumber='+57 310 801 2566'/>
        </div>
    );
};

export default Search;
