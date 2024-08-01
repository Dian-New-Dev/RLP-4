import React from "react";

const Sobre: React.FC = () => {
    return (
        <div id="A" className="w-full">
            <div className="bg-sky-100 flex justify-center items-center p-28 pb-36">
                <h2 className="font-roboto text-2xl font-bold text-sky-950">Sobre o Trailmaster</h2>
            </div>
            <div className="w-full relative flex flex-col items-center">
                <div className="z-10 text-center w-3/4 h-60 mt-[-100px] bg-sky-900 flex flex-col justify-center gap-3 rounded-xl px-4">
                    <p className="italic text-sky-100 font-roboto">"Caminhar é a melhor forma de se exercitar, pois movimenta o corpo, aquieta a mente e reconecta a pessoa ao seu entorno natural."</p>
                    <h6 className="text-sky-100 font-roboto text-sm font-thin">Paulo Mendes Campos</h6>
                    
                </div>
                <div className="bg-sky-800 w-full mt-[-150px] p-48 text-center font-roboto text-sky-100 flex flex-col gap-8">
                    <h3 className="text-sky-200 font-roboto text-lg font-bold">Benefícios de uma caminhada guiada</h3>
                    <div className="grid grid-cols-2 grid-rows-2 gap-8">
                        <div className="flex flex-col items-center gap-4">
                            <img className="w-14" src="images/heart.png" alt="Ícone de coração." />
                            <h4 className="underline p-2">Saúde Cardiovascular</h4>
                            <p>A caminhada regular fortalece o coração, melhora a circulação sanguínea e reduz o risco de doenças cardíacas. É uma maneira simples e eficaz de manter seu sistema cardiovascular saudável e eficiente.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <img className="w-14" src="images/weight.png" alt="Ícone de balança de peso." />
                            <h4 className="underline p-2">Controle de Peso</h4>
                            <p>Caminhar ajuda a queimar calorias e a manter um peso saudável. É uma atividade acessível para todos os níveis de condicionamento físico e pode ser facilmente integrada à sua rotina diária.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <img className="w-14" src="images/mental-health.png" alt="Ícone de mende sadia." />
                            <h4 className="underline p-2">Saúde Mental
                            </h4>
                            <p>Caminhar ao ar livre reduz o estresse, melhora o humor e combate a ansiedade e a depressão. A exposição à natureza e a atividade física leve liberam endorfinas, promovendo bem-estar mental.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <img className="w-14" src="images/arm.png" alt="Ícone de músculo." />
                            <h4 className="underline p-2">Fortalecimento Muscular</h4>
                            <p>A caminhada trabalha vários grupos musculares, especialmente nas pernas e no abdômen. Com o tempo, você notará um aumento na força e na resistência muscular, melhorando sua postura e equilíbrio.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Sobre;