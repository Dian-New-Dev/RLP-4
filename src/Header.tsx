import React from 'react';
import { useState, useEffect } from 'react'; // 1 - importa useState
import Hamburguer from './Hamburguer';

const Header: React.FC = () => {

    const viewportWidth = window.innerWidth;
    const [showHamburguer, setShowHamburguer] = useState(false); //2 - Inicializa o Estado


    useEffect(() => {
        if (viewportWidth < 801)
            setShowHamburguer(!showHamburguer);


    }, []);


    if (showHamburguer) { //se showhamburguer está true, mostrar retornar hamburguer
        return (
            <div id="A" className="flex w-full">
                <div className="w-3/12">
                    <img className="w-48" src="images/logo-bg.png" alt="Logo" />
                </div>

                <Hamburguer />
            </div>
        )
    } else {
        return (
            <div id="A" className="flex w-full">
                <div className="w-3/12">
                    <img className="w-48" src="images/logo-bg.png" alt="Logo" />
                </div>

                <nav className="w-3/4 flex justify-end items-center gap-2 lg:gap-7 text-sm lg:text-base">
                    <a className="font-roboto text-sky-100 hover:text-sky-300" href="#A">Sobre</a>
                    <a className="font-roboto text-sky-100 hover:text-sky-300" href="#B">Funcionalidades</a>
                    <a className="font-roboto text-sky-100 hover:text-sky-300" href="#C">Depoimentos</a>
                    <a className="font-roboto text-sky-100 hover:text-sky-300" href="#D">Planos</a>
                </nav>
            </div>
        )
    }


}

export default Header;