import React from "react";

const Sobre: React.FC = () => {
    return (
        <div className="w-full">
            <div className="bg-sky-100 flex justify-center items-center p-28 pb-36">
                <h2 className="font-roboto text-2xl font-bold text-sky-950">Sobre o Trailmaster</h2>
            </div>
            <div className="w-full relative flex flex-col items-center">
                <div className="z-10 text-center w-3/4 h-60 mt-[-100px] bg-sky-900 flex flex-col justify-center gap-3 rounded-xl">
                    <p className="text-sky-100 font-roboto">"Caminhar é a melhor forma de se exercitar, pois movimenta o corpo, aquieta a mente e reconecta a pessoa ao seu entorno natural."</p>
                    <h6 className="text-sky-100 font-roboto text-sm italic font-thin">Paulo Mendes Campos</h6>
                    
                </div>
                <div className="bg-sky-800 w-full mt-[-150px] p-48 text-center">
                    <h3 className="text-sky-100 font-roboto text-lg">Benefícios de uma caminhada guiada</h3>
                    <div>
                        <div>
                            <img src="" alt="Ícone de" />
                            <h4>Saúde Cardiovascular</h4>
                            <p>A caminhada regular fortalece o coração, melhora a circulação sanguínea e reduz o risco de doenças cardíacas. É uma maneira simples e eficaz de manter seu sistema cardiovascular saudável e eficiente.</p>
                        </div>
                        <div>
                            <img src="" alt="Ícone de" />
                            <h4>Controle de Peso</h4>
                            <p>Caminhar ajuda a queimar calorias e a manter um peso saudável. É uma atividade acessível para todos os níveis de condicionamento físico e pode ser facilmente integrada à sua rotina diária.</p>
                        </div>
                        <div>
                            <img src="" alt="Ícone de" />
                            <h4>Saúde Mental
                            </h4>
                            <p>Caminhar ao ar livre reduz o estresse, melhora o humor e combate a ansiedade e a depressão. A exposição à natureza e a atividade física leve liberam endorfinas, promovendo bem-estar mental.</p>
                        </div>
                        <div>
                            <img src="" alt="Ícone de" />
                            <h4>Fortalecimento Muscular</h4>
                            <p>A caminhada trabalha vários grupos musculares, especialmente nas pernas e no abdômen. Com o tempo, você notará um aumento na força e na resistência muscular, melhorando sua postura e equilíbrio.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Sobre;