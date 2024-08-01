import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='w-full bg-sky-950 text-sky-100 flex flex-row sm:flex-col text-xs font-roboto justify-around items-center gap-2'>
            <div className='sm:order-1'>
                <img className="w-24 sm:w-32 pt-1 ml-[-10px] sm:ml-0" src="images/logo-bg2.png" alt="Logo" />
            </div>

            <div className='sm:order-3 flex flex-col text-sky-600 text-center sm:text-left sm:flex-row gap-1 sm:gap-4 ml-[-15px]'>
                <div>
                    <p>contato@trailmaster.com</p>
                </div>
                <div>
                    <a href="#">Termos de Serviço</a>
                </div>
                <div>
                    <a href="#">Política de Privacidade</a>
                </div>
            </div>

            <div className='sm:order-2 flex gap-2'>
                <a href="www.facebook.com" target='_blank'><img className='w-4 sm:w-8 hover:border' src="images/facebook.png" alt="Ícone de Facebook" /></a>
                <a href="www.twitter.com" target='_blank'><img className='w-4 sm:w-8 hover:border' src="images/twitter.png" alt="Ícone de Twitter" /></a>
                <a href="www.instagram.com" target='_blank'><img className='w-4 sm:w-8 hover:border' src="images/instagram.png" alt="Ícone de Instagram" /></a>
            </div>
        </div>
        
    );
};

export default Footer;