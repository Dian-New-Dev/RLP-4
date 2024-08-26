import React from 'react';
import Header from './Header';
import Hero from './Hero';

const HeaderHero: React.FC = () => {
    return (
        <div id='A' className="px-10 pr-10 2xl:px-20 py-5 h-screen w-full bg-cover bg-[25%] bg-[url('/assets/images/hero.jpg')] bg-blend">
            <Header />

            <Hero />
        </div>


   
    );
};

export default HeaderHero;