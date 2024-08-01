import React from 'react';

const CTA: React.FC = () => {
    return (
        <div id="D" className='font-roboto bg-sky-900 flex flex-col justify-center items-center p-16 gap-16'>
            <h4 className='text-sky-200 text-2xl'>Saúde, aventura, companhia. Tudo na palma da sua mão.</h4>
            <button className="bg-sky-800 hover:bg-sky-900 font-bold py-2 px-4 rounded-full text-sky-100 font-roboto w-56">Baixar Grátis</button>
        </div>
        
    );
};

export default CTA;