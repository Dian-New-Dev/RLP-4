import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className='flex flex-col items-end w-full justify-end sm:pl-0 md:pl-0 lg:pl-80 pt-24  sm:pt-24 gap-5'>
            <div className='flex flex-col items-end gap-5'>
                <h1 className='text-end text-3xl md:text-5xl text-sky-100 font-roboto'>
                    
                    Foco na caminhada. O resto, a gente resolve.</h1>
                <h2 className='text-end text-1xl text-sky-100 font-roboto'>
                    
                    Com o aplicativo trailmaster, suas caminhadas ficarão mais fáceis, práticas
                    e estonteantes. Novas paisagens, novos trajetos, novas aventuras.</h2>
                <button className='bg-sky-800 hover:bg-sky-900 font-bold py-2 px-4 rounded-full text-sky-100 font-roboto w-56'>
                    Download
                </button>
            </div>
        </div>
    )
}

export default Hero;