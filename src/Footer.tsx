import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='bg-sky-950 text-sky-100 flex flex-col text-xs font-roboto justify-center items-center gap-2'>
            <div>
                <img className="w-32 pt-1" src="images/logo-bg2.png" alt="Logo" />
            </div>
            <div className='flex gap-2'>
                <a href="www.facebook.com" target='_blank'><img className='w-8 hover:border' src="images/facebook.png" alt="Ícone de Facebook" /></a>
                <a href="www.twitter.com" target='_blank'><img className='w-8 hover:border' src="images/twitter.png" alt="Ícone de Twitter" /></a>
                <a href="www.instagram.com" target='_blank'><img className='w-8 hover:border' src="images/instagram.png" alt="Ícone de Instagram" /></a>
            </div>
            <div className='flex gap-4'>
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
        </div>
        
    );
};

export default Footer;