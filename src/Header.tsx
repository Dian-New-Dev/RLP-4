import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="flex w-full">
            <div className="w-3/12">
                <img className="w-48" src="public/images/logo-bg.png" alt="Logo" />
            </div>

            <nav className="w-3/4 flex justify-end items-center gap-7">
                <a className="font-roboto text-sky-100 hover:text-sky-300" href="#">Início</a>
                <a className="font-roboto text-sky-100 hover:text-sky-300" href="#">Sobre</a>
                <a className="font-roboto text-sky-100 hover:text-sky-300" href="#">Funcionalidades</a>
                <a className="font-roboto text-sky-100 hover:text-sky-300" href="#">Depoimentos</a>
                <a className="font-roboto text-sky-100 hover:text-sky-300" href="#">Planos</a>
            </nav>
        </div>

    )
}

export default Header;