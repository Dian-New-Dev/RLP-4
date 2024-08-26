import React from "react";
import Estrelas from "./Estrelas"

const Depoimentos:React.FC = () => {
    return (
        <div id="D" className="relative w-full max-w-[1440px] font-roboto bg-sky-100 flex flex-col justify-center items-center p-16 gap-16">
            <h2 className="font-roboto text-2xl lg:text-4xl font-bold text-sky-950">Depoimentos</h2>
            <div className="flex flex-col sm:flex-row lg:grid grid-cols-2 items-center justify-center gap-4">
                <div className="z-10 bg-gray-100/50 py-4 border w-full max-w-[500px] flex flex-col items-center flex-1 justify-center text-center gap-2 hover:scale-[1.01]">
                    <img className="w-28 rounded-full border border-gray-400/50 p-1" src={"./assets/images/img (1).png"} alt="Foto de rosto de usuário do aplicativo" />
                    <h3 className="text-sky-600 font-bold">Ana S.</h3>
                    <p>"Este aplicativo transformou minhas trilhas! As sugestões de rotas são incríveis e os mapas offline são super úteis."</p>
                    <Estrelas />
                </div>
                <div className="z-10 bg-gray-100/50 py-4 border w-full max-w-[500px] flex flex-col items-center flex-1 justify-center text-center gap-2 hover:scale-[1.01]">
                    <img className="w-28 rounded-full border border-gray-400/50 p-1" src={"./assets/images/img (1).jpeg"} alt="Foto de rosto de usuário do aplicativo" />
                    <h3 className="text-sky-600 font-bold">Marcos L.</h3>
                    <p>"A funcionalidade de planejamento de rotas é muito intuitiva. Recomendo a todos os trilheiros, para uma vida mais fácil!"</p>
                    <Estrelas />
                </div>
                <div className="z-10 bg-gray-100/50 py-4 border w-full max-w-[500px] flex flex-col items-center flex-1 justify-center text-center gap-2 hover:scale-[1.01]">
                    <img className="w-28 rounded-full border border-gray-400/50 p-1" src={"./assets/images/img (2).jpeg"} alt="Foto de rosto de usuário do aplicativo" />
                    <h3 className="text-sky-600 font-bold">Julia P.</h3>
                    <p>"Antes eu ficava só na mesmice do mesmo trajeto. Depois que comecei a usar o aplicativo Trailmaster, descubro um novo trajeto todo dia."</p>
                    <Estrelas />
                </div>
                <div className="z-10 bg-gray-100/50 py-4 border w-full max-w-[500px] flex flex-col items-center flex-1 justify-center text-center gap-2 hover:scale-[1.01]">
                    <img className="w-28 rounded-full border border-gray-400/50 p-1" src={"./assets/images/img (3).jpeg"} alt="Foto de rosto de usuário do aplicativo" />
                    <h3 className="text-sky-600 font-bold">Victoria A.</h3>
                    <p>"Sempre achei que fazer trilhas fosse algo solitário. Com esse aplicativo, me conecto com pessoas igualmente interessadas no hobby!"</p>
                    <Estrelas />
                </div>
            </div>
            <img className="absolute z-0 w-96 opacity-50 left-0 top-0" src={"./assets/images/depo1.png"} alt="Desenho de pessoa correndo" />
            <img className="absolute z-0 w-96 opacity-50 right-0 bottom-0" src={"./assets/images/depo2.png"} alt="Desenho de pessoa correndo" />
        </div>
    )
}

export default Depoimentos;