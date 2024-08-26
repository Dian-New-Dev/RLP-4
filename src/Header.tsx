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

    //o seguinte código cuida de detectar que o usuário rolou a página
    //para baixo para aplicar leve sombreamento no header

    const [rolouScroll, setRolouScroll] = useState(false);

    useEffect(() => {
        const seRolarScroll = () => {
            if (window.scrollY > 50) {
                setRolouScroll(true);
            } else {
                setRolouScroll(false)
            }
        }


        window.addEventListener('scroll', seRolarScroll);

        return () => {
            window.removeEventListener('scroll', seRolarScroll);
        };

    }, []);


    if (showHamburguer) { //se showhamburguer está true, retornar hamburguer
        return (
            <div id="A" className="z-50 fixed top-0 left-0 flex w-full p-4">
                <div className="z-50 w-3/12">
                    <img className={`z-50 w-48 min-w-[100px] logo-transicao ${rolouScroll ? 'logo-destacado' : 'logo-normal'}`} src={"./images/logo-bg.png"} alt="Logo" />
                </div>

                <Hamburguer />

                <div className={`z-40 w-full fixed top-0 left-0 p-8 transicao-gradiente ${rolouScroll ? 'gradiente' : 'sem-gradiente'}`}></div>
            </div>
        )
    } else {
        return (
            <div id="A" className="px-0 lg:px-16 xl:px-32 2xl:px-64 z-50 flex w-full">
                <div className="z-50 w-3/12">
                    <img className="z-50 w-48" src={"./images/logo-bg.png"} alt="Logo" />
                </div>

                <nav className="z-50 w-3/4 flex justify-end items-center gap-2 lg:gap-7 text-sm lg:text-base">
                    <a className="z-50 font-roboto text-sky-100 hover:text-sky-300" href="#A">Sobre</a>
                    <a className="z-50 font-roboto text-sky-100 hover:text-sky-300" href="#B">Funcionalidades</a>
                    <a className="z-50 font-roboto text-sky-100 hover:text-sky-300" href="#C">Depoimentos</a>
                    <a className="z-50 font-roboto text-sky-100 hover:text-sky-300" href="#D">Planos</a>
                </nav>
            </div>
        )
    }


}

export default Header;