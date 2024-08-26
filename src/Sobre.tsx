import React from "react";

const Sobre: React.FC = () => {
    return (
        <div id="B" className="w-full">
            <div className=" bg-sky-950 flex justify-center items-center p-28 py-10 z-20">
                <h2 className="z-20 font-roboto text-2xl lg:text-4xl text-center font-bold text-sky-100">Sobre o Trailmaster</h2>
            </div>
            <div className="w-full relative flex flex-col items-center">
                <div className="relative z-10 text-center w-3/4 max-w-[960px] h-60 mt-[-100px] bg-sky-950 flex flex-col justify-center gap-3 rounded-xl px-4 py-24">
                    <img className="w-48 opacity-5 absolute top-5" src="images/quote.png" alt="Ícone de aspas" />
                    <img className="w-48 opacity-5 absolute bottom-5 right-0 rotate-180" src="images/quote.png" alt="Ícone de aspas" />
                    <p className="italic text-sky-100 font-roboto">"Caminhar é a melhor forma de se exercitar, pois movimenta o corpo, aquieta a mente e reconecta a pessoa ao seu entorno natural."</p>
                    <h6 className="text-sky-100 font-roboto text-sm font-thin">Paulo Mendes Campos</h6>
                    
                </div>
                <div className="bg-sky-800 bg-[url('/images/about.jpg')] bg-cover bg-center h-full bg-blend  w-full mt-[-150px] pt-48 p-12 md:p-48 text-center font-roboto text-sky-100 flex flex-col items-center gap-8">
                    <h3 className="text-sky-100 font-roboto text-xl xl:text-2xl font-bold">Benefícios de uma caminhada guiada</h3>
                    <div className="grid grid-cols-2 grid-rows-2 place-items-center gap-8 2xl:gap-16 w-full max-w-[1440px] 2xl:px-28">
                        <div className="flex flex-col items-center gap-4 w-full max-w-[500px]">
                            <img className="w-14" src="images/heart.png" alt="Ícone de coração." />
                            <h4 className="p-2 font-bold text-lg md:text-xl ">Saúde {<br />} Cardiovascular</h4>
                            <p className="border-t pt-4  text-sm md:text-base">A caminhada regular fortalece o coração, melhora a circulação sanguínea e reduz o risco de doenças cardíacas. É uma maneira simples e eficaz de manter seu sistema cardiovascular saudável e eficiente.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4 w-full max-w-[500px]">
                            <img className="w-14" src="images/weight.png" alt="Ícone de balança de peso." />
                            <h4 className="p-2 font-bold text-lg md:text-xl ">Controle {<br />} de Peso</h4>
                            <p className="border-t pt-4  text-sm md:text-base">Caminhar ajuda a queimar calorias e a manter um peso saudável. É uma atividade acessível para todos os níveis de condicionamento físico e pode ser facilmente integrada à sua rotina diária.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4 w-full max-w-[500px]">
                            <img className="w-14" src="images/mental-health.png" alt="Ícone de mende sadia." />
                            <h4 className="p-2 font-bold text-lg md:text-xl ">Saúde {<br />} Mental</h4>
                            <p className="border-t pt-4  text-sm md:text-base">Caminhar ao ar livre reduz o estresse, melhora o humor e combate a ansiedade e a depressão. A exposição à natureza e a atividade física leve liberam endorfinas, promovendo bem-estar mental.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4 w-full max-w-[500px]">
                            <img className="w-14" src="images/arm.png" alt="Ícone de músculo." />
                            <h4 className="p-2 font-bold text-lg md:text-xl ">Fortalecimento {<br />} Muscular</h4>
                            <p className="border-t pt-4  text-sm md:text-base">A caminhada trabalha vários grupos musculares, especialmente nas pernas e no abdômen. Com o tempo, você notará melhorias em força, resistência, postura e equilíbrio, garantiando maior qualidade de vida.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Sobre;