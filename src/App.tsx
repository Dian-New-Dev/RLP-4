import React from 'react';
import HeaderHero from './HeaderHero'
import Sobre from './Sobre'
import Funcionalidades from './Funcionalidades';
import Depoimentos from './Depoimentos';
import CTA from './CTA';
import Footer from './Footer';

const App: React.FC = () => {
    return (
        <div className='flex flex-col items-center bg-sky-100'>
            <HeaderHero />

            <Sobre />

            <Funcionalidades />

            <Depoimentos />

            <CTA />

            <Footer />
        </div>
        
    );
};

export default App;