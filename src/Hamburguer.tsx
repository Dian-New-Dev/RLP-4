import React from 'react';
import { useState } from 'react';


const Hamburguer: React.FC = () => {

    const [isHambVisible, setisHambVisible] = useState(false);

    function abreFechaHamb() {
        setisHambVisible(!isHambVisible);
    }






    return (
        <div className='z-50 w-full relative'>
            <div onClick={abreFechaHamb} id="hamb-lines-container" className='flex flex-col gap-2 items-end pt-0.5 cursor-pointer'>
                <div className='bg-sky-100 w-8 h-0.5'></div>
                <div className='bg-sky-100 w-8 h-0.5'></div>
                <div className='bg-sky-100 w-8 h-0.5'></div>

            </div>

            <div id="hamb-painel" className='w-1/2 min-w-[160px] h-full absolute right-0 top-7 text-center'>
                <div className=
                {`transition-all flex duration-500  ease-in-out flex-col py-2 px-6 gap-2 font-roboto bg-sky-950/90 font-bold text-sky-100 rounded-lg ${isHambVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <a onClick={abreFechaHamb} className=' hover:bg-sky-900' href="#A">Início</a>
                    <div className='h-1 w-full bg-sky-100 scale-y-[0.2]'></div>
                    <a onClick={abreFechaHamb} className=' hover:bg-sky-900' href="#B">Sobre</a>
                    <div className='h-1 w-full bg-sky-100 scale-y-[0.2]'></div>
                    <a onClick={abreFechaHamb} className=' hover:bg-sky-900' href="#C">Funcionalidades</a>
                    <div className='h-1 w-full bg-sky-100 scale-y-[0.2]'></div>
                    <a onClick={abreFechaHamb} className=' hover:bg-sky-900' href="#D">Depoimentos</a>
                    <div className='h-1 w-full bg-sky-100 scale-y-[0.2]'></div>
                    <a onClick={abreFechaHamb} className=' hover:bg-sky-900' href="#E">Planos</a>
                </div>
            </div>
            
        </div>
    )
}



export default Hamburguer;