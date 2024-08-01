import React from "react";

const Funcionalidades:React.FC = () => {
    return (
        <div id="B" className="font-roboto bg-sky-100 flex flex-col justify-center items-center p-16 gap-16">
            <h2 className="font-roboto text-2xl font-bold text-sky-950">Funcionalidades</h2>
            <div className="flex gap-4">
                <div className="text-center">
                    <h3 className="text-1xl">Planejamento de Rotas</h3>
                    <p className="text-sm">Crie e personalize suas trilhas com facilidade.</p>
                </div>
                <div className="text-center">
                    <h3 className="text-1xl">Sugestões de Destinos</h3>
                    <p className="text-sm">Descubra novos locais incríveis para explorar.</p>
                </div>
                <div className="text-center">
                    <h3 className="text-1xl">Comunidade de Trilheiros</h3>
                    <p className="text-sm">Conecte-se com outros entusiastas e troque dicas.</p>
                </div>
            </div>

            <button className="bg-sky-800 hover:bg-sky-900 font-bold py-2 px-4 rounded-full text-sky-100 font-roboto w-56">Experimente</button>
        </div>
    )
}

export default Funcionalidades;