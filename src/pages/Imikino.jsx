import React from 'react';
import SubNav from '../Components/SubNav';
import { motion } from 'framer-motion';

const Imikino = () => {
  return (
    <div>
      <SubNav />
      <div className='px-4 py-20 md:py-40 sm:p-7'>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='mt-6 mb-16 text-4xl font-extrabold text-center text-red-900'
        >
          Imikino gakondo yo mu Rwanda
        </motion.h1>
        <div className='justify-between px-2 rounded-lg md:px-32 '>
          <div className='flex flex-col gap-8 rounded-lg shadow-sm md:flex-row  '>
            <motion.img
              src="/urukiramende.jpeg"
              alt=""
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className='w-full px-6 pt-6 pb-6 rounded-lg shadow-lg md:w-1/2 h-80'
            />
            <div>
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='mt-4 mb-4 text-3xl font-bold md:mt-10 md:mb-10'
              >
                URUKIRAMENDE
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Ubusanzwe, Urukiramende rugira uduti dutatu, udushingwa tubiri n’umutambiko wa gatatu. Abakina uyu mukino bagenda basimbuka maze ugushije umutambiko w’urukiramende bakavuga ko arunereye. Abo basimbuka bahora bunguruza bazamura hejuru bagahagararira aho rubananiriye. Uyu mukino wakundwaga cyane n’urubyiruko kuko wabashimishaga kandi ukerekana ko koko bafite ingufu.
              </motion.p>
            </div>
          </div>
        </div>
        <div className='justify-between px-4 rounded-lg md:px-32 mt-7'>
          <div className='flex flex-col gap-8 rounded-lg shadow-md md:flex-row  '>
            <motion.img
              src="/kumasha1.jpeg"
              alt=""
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className='w-full px-6 pt-6 pb-6 rounded-lg shadow-md md:w-1/2'
            />
            <div>
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='mt-4 mb-4 text-3xl font-bold md:mt-10 md:mb-10'
              >
                KUMASHA
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Kumasha ni umukino wo kurushanwa kuboneza. Bareba ahantu hameze neza bakahateranira bafite umuheto n’impiru, bakareba icyo bashinga ngo bakimashe. Ibi babyitaga kandi kurasa intego. Bamwe bakundaga gushinga nk’umutumba w’insina. Uyu mukino watumaga urubyiruko rwitoza kuboneza kugira ngo ku rugamba cyangwa mu muhigo bazashobore guhiga abandi.
              </motion.p>
            </div>
          </div>
        </div>
        <div className='px-4 rounded-lg md:px-32 mt-7'>
          <div className='flex flex-col gap-8 rounded-lg shadow-md md:flex-row  '>
            <motion.img
              src="/ibyino.jpeg"
              alt=""
              className='w-full h-auto px-6 pt-6 pb-6 rounded-lg shadow-md md:w-1/2'
            />
            <div>
              <h1 className='mt-4 mb-4 text-3xl font-bold md:mt-10 md:mb-10'>IMBYINO</h1>
              <p>
                Nk’uko mu muco haba umurage, izi mbyino zigenda zihererekanywa uko imyaka iza indi igataha. Abiga kubyina akenshi babikoreraga mu Itorero ryari kandi rikomeje kuba irerero ry’umuco gakondo. Usibye kubyina no gutozwa umuco, mu itorero ni ho higirwaga indirimbo kandi akenshi imbyino zijyana n’umuziki by’umwihariko indirimbo.
              </p>
            </div>
          </div>
        </div>
        <div className='px-4 rounded-lg md:px-32 mt-7'>
          <div className='flex flex-col gap-8 rounded-lg shadow-md md:flex-row  '>
            <motion.img
              src="/kumasha.png"
              alt=""
              className='w-full h-auto px-6 pt-6 pb-6 rounded-lg shadow-lg md:w-1/2'
            />
            <div>
              <h1 className='mt-4 mb-4 text-3xl font-bold md:mt-10 md:mb-10'>GUHIGA</h1>
              <p>
                Umukino wo guhiga ni umukino wakorwaga mugihe cyo hambere cyane cyane iyo Abami n'abana babo bashakaga kuzana umuhigo icyo gihe uy'umukino wakorwaga hifashishijwe Umuheto n'imyambi rero habaga hari umugiho runaka wateganyijwe gufatwa urugero intuma y'intungura, isha, urukwavu rw'shyamba n'imbogo n'izindi nyamaswa z'ishyamba ziribwa.Icyo gihe uwahamyaga kimwe muriyamihigo mbere yabandi yabaga ariwe watsinze .Nyuma yaho wamuhigo barawutahanaga bakajya kuwotsa cyangwa kututeka hanyuma bakawurya ndetse bakanywa bakabyina ndetse bagaca umugara w'insinzi.
              </p>
            </div>
          </div>
        </div>
        <div className='px-4 rounded-lg md:px-32 mt-7'>
          <div className='flex flex-col gap-8 rounded-lg shadow-md md:flex-row  '>
            <motion.img
              src="/igisoror.jpeg"
              alt=""
              className='  rounded-lg shadow-lg px-6 pt-6 pb-6 w-[273rem] h-96'
            />
            <div>
              <h1 className='mt-4 mb-4 text-3xl font-bold md:mt-10 md:mb-10'>IGISORO</h1>
              <p>
                Umukino w’Igisoro ni umwe mu mikino izwi ko ari iya kera cyane mu Rwanda. Igisoro kibazwa mu giti cyangwa kikabumbwa ariko n’abana bashobora kugikora bacukura utwobo mu butaka. Muri rusange, Igisoro kigizwe n’impande ebyiri, buri ruhande rugizwe n’utwobo cumi na dutandatu aho buri kamwe kitwa icuba. Bivuze ko utwobo twose tugize igisoro ari mirongo itatu na tubiri. Igisoro gikinwa n’abantu babiri bakoresheje utubuye tw’igisoro mirongo itandatu na tune. Utwo tubuye hari abatwita inka cyangwa imbuguzo. Kugira ngo utsinde, bisaba ko urya inka za mugenzi wawe zose ukazimumaraho.
              </p>
            </div>
          </div>
        </div>
        <div className='px-4 rounded-lg md:px-32 mt-7'>
          <div className='flex flex-col gap-8 rounded-lg shadow-md md:flex-row  '>
            <motion.img
              src="/umuduri.jpg"
              alt=""
              className=' md:w-1/2 h-96 w-[273rem] rounded-lg shadow-lg px-6 pt-6 pb-6'
            />
            <div>
              <h1 className='mt-4 mb-4 text-3xl font-bold md:mt-10 md:mb-10'>UMUDURI</h1>
              <p>
                Umuduri ni igikoresho gikoreshwa mu Burundi no mu Rwanda . Ni umuheto w'umuziki, ugizwe n'umugozi ushyigikiwe n'ibiti byoroshye, umuheto ufite nibura ni 125 –135 cm z'uburebure. [1] Umugozi usanzwe ukorwa mu migozi y, ibihingwa cyangwa ibiti, ni nda y'inyamaswa. Ariko nanone imigozi y'ibyuma igenda ikwirakwira.
              </p>
            </div>
          </div>
        </div>
        <div className='px-4 rounded-lg md:px-32 mt-7'>
          <div className='flex flex-col gap-8 rounded-lg shadow-md md:flex-row  '>
            <motion.img
              src="/umugozi.jpeg"
              alt=""
              className='w-full h-auto px-6 pt-6 pb-6 rounded-lg shadow-lg md:w-1/2'
            />
            <div>
              <h1 className='mt-4 mb-4 text-3xl font-bold md:mt-10 md:mb-10'>GUSIMBUKA UMUGOZI</h1>
              <p>
                Nubwo iyi mikino usanga itagikinwa, ingoro z’amateka mu Rwanda ziracyayisigasiye kuko abana bagize amahirwe yo gusura ingoro ndangamurage berekwa ibyo byose uko byakorwaga, imikino yakinwaga n’akamaro bifitiye Abanyarwanda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imikino;
