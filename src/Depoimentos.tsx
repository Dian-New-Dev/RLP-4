import React from "react";
import Estrelas from "./Estrelas"

const Depoimentos:React.FC = () => {
    return (
        <div id="C" className="w-full max-w-[1440px] font-roboto bg-sky-100 flex flex-col justify-center items-center p-16 gap-16">
            <h2 className="font-roboto text-2xl lg:text-4xl font-bold text-sky-950">Depoimentos</h2>
            <div className="flex flex-col sm:flex-row lg:grid grid-cols-2 items-center justify-center gap-4">
                <div className="w-full max-w-[500px] flex flex-col items-center flex-1 justify-between text-center gap-2">
                    <img className="w-28 rounded-full" src="images/img (1).png" alt="Foto de rosto de usuário do aplicativo" />
                    <h3 className="text-sky-600 font-bold">Ana S.</h3>
                    <p>"Este aplicativo transformou minhas trilhas! As sugestões de rotas são incríveis e os mapas offline são super úteis."</p>
                    <Estrelas />
                </div>
                <div className="w-full max-w-[500px] flex flex-col items-center flex-1 justify-between text-center gap-2">
                    <img className="w-28 rounded-full" src="images/img (1).jpeg" alt="Foto de rosto de usuário do aplicativo" />
                    <h3 className="text-sky-600 font-bold">Marcos L.</h3>
                    <p>"A funcionalidade de planejamento de rotas é muito intuitiva. Recomendo a todos os trilheiros, para uma vida mais fácil!"</p>
                    <Estrelas />
                </div>
                <div className="w-full max-w-[500px] flex flex-col items-center flex-1 justify-between text-center gap-2">
                    <img className="w-28 rounded-full" src="images/img (2).jpeg" alt="Foto de rosto de usuário do aplicativo" />
                    <h3 className="text-sky-600 font-bold">Julia P.</h3>
                    <p>"Antes eu ficava só na mesmice do mesmo trajeto. Depois que comecei a usar o Trailmaster, descubro um novo trajeto todo dia."</p>
                    <Estrelas />
                </div>
                <div className="w-full max-w-[500px] flex flex-col items-center flex-1 justify-between text-center gap-2">
                    <img className="w-28 rounded-full" src="images/img (3).jpeg" alt="Foto de rosto de usuário do aplicativo" />
                    <h3 className="text-sky-600 font-bold">Victoria A.</h3>
                    <p>"Sempre achei que fazer trilhas fosse algo solitário. Com esse aplicativo, me conecto com pessoas igualmente interessadas no hobby!"</p>
                    <Estrelas />
                </div>
            </div>
        </div>
    )
}

export default Depoimentos;