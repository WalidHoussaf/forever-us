import React from 'react';
import { motion } from 'framer-motion';
import TogetherForever from '../assets/forevertogether.png';
import MarriedKids from '../assets/getmarried.png';
import WorkSuccess from '../assets/worksuccess.png';
import Porsche from '../assets/porsche.png';
import TravelTogether from '../assets/traveltogether.png';
import backgroundImage from '../assets/goalsbg.png';

const goals = [
  {
    title: 'Stay Together Forever',
    text: '7biba bghit nb9aw dima ensemble, no matter achno l7ayat m9esma lina. Fkola le7da l7lowa ol mora , Ghanb9a dima nkhtarek nti. Nti 9lbi o Dari o a7ssen moghamara diali. Fkola choro9, bghit nfi9 o ana 3arf bli nti fjnbi, o kola ghoroub, bghit n3es o ana 3arf bli l7ob dialna ghadi o kikber kter. Fkola 3asifa O kola Naja7, Kanwa3dek bli ghanb9a fjnbek, yed fl yed, ro7 b ro7, dima ila l2abad.',
    image: TogetherForever,
  },
  {
    title: 'Get married and have kids',
    text: 'Zineb, my love, bghit had l3ala9a dialna tsali b2a7ssen haja li hiya zwaj la ktabt l2oumour. 3rfti mn db kantkhayel frasi dak dif2e dial dar ol 3a2ila m3ak, sawt dial wladna m3emer 3lina wakha nti gha bo7dek m3emra 3lia a 7biba. Bghit njereb m3ak kola le7da (fer7a, naja7) ontfew9o 3la kol si3ab ana o yak o tahaja maghatghlebna b2idn llah, nsupportiw b3diyatna fl bad times, o ncreeiw memories zwinin li m3mrna nsaw onb9aw dima ncherichiwhom. You are my heart, my future, and my greatest dream.',
    image: MarriedKids,
  },
  {
    title: 'Be successful in work life',
    text: 'Kantmena mn kol 9lbi nj7o fl7ayat dialna, bjoj personally o professionally. Bghit nkono lbest support lb3diyatna, nghelbo ay challenge o n7taflo bga3 lvictories diawlna. No matter fin ghatwslna lcarriere dialna, kan7lem nkber fjnbek o dima m3ak, bach nbniw insha allah lmosta9bal dialna kima bghinah o ana wate9 mn hadchi .',
    image: WorkSuccess,
  },
  {
    title: 'Drive a Porsche together',
    text: 'Dima kan7lem bdak nhar li tkoni nti fjnbi galsa o ghadin f lPorsche dialna, ghadi o chad lik f idik o kola mera kanhezha onbosha. Sara7a mab9atch gha ftonobil o safi b9at f dik l adventure li ghankono fiha , dak l7amas lmotabadal o dak chaw9 lb3diyatna, o dok lmemories li ghansen3o fhad journey dialna.',
    image: Porsche,
  },
  {
    title: 'Explore the world together',
    text: 'Dima kan7lem nsafer o nktachef l3alam, nstkchef blays jdad, ta9afat mtnw3in, o des experiences motirin o hadchi kaml m3ak ghaykheli hadchi a7la x infinite . Njerbo insha allah ay activity bghinaha, o kola nhar ghaydoz 7sen mn lakhor .',
    image: TravelTogether,
  },
];

const LifeGoals = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-10 rounded-2xl bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})` }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-['Love_Light'] text-center 
        bg-gradient-to-r from-[#FAFFC5] to-[#ec082e] 
        text-transparent bg-clip-text mb-8 leading-snug md:leading-normal">
          Our Goals Together
        </h2>
        <div className="space-y-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md border border-white/20"
            >
              <img
                src={goal.image}
                alt={goal.title}
                className="w-36 h-36 md:w-40 md:h-40 rounded-xl object-cover mr-6"
              />
              <div>
                <h3 className="text-4xl font-semibold text-white font-['Cormorant_Garamond']">{goal.title}</h3>
                <p className="text-2xl text-gray-300 mt-2 font-['Cormorant_Garamond']">{goal.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeGoals;
