import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Practice = () => {
  return (
    <div className=''>
      <div className='flex flex-col gap-8 px-6 pb-6 mt-[8%] mb-4  lg:flex-row  sm:px-9'>
        <div className='w-full lg:w-1/2 h-64 sm:h-80 md:h-[35rem] mt-2'>
          <motion.img
            src="abakuze.jpg"
            alt=""
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='w-full h-full'
          />
        </div>

        <div className='w-full mt-12 lg:w-1/2 lg:mt-10'>
          <h1 className=' font-medium sm:text-3xl md:text-1xl'>

        
            Uko u Rwanda rwatuwe kuva mu myaka ibihumbi ishize
          </h1>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='mt-4 sm:text-lg text-1xl '
          >
            U Rwanda, igihugu bamwe bivugira, batazi inkomoko y’iryo zina, ruteye amatsiko kumenya igihe rwaturiwe, bamwe bemeza ko ari ejobundi mu mwaka wa 1091 nyuma y’ivuka rya Yezu, abandi bakemeza ko rwamutanze kuvuka.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='mt-4 sm:text-lg text-1xl'
          >
            U Rwanda, amateka yagiye yandikwa, avuga ko rwatangiye ari agahugu gato, kari i Gasabo mu Karere ka Gasabo kuri ubu, muri ako karere ubu niho habarizwa ibiro bitandukanye by’ubuyobozi bw’igihugu, iby’Umukuru w’Igihugu, Minisiteri nyinshi n’ibindi bigo bikomeye mu Rwanda, ariko aho rwatangiriye, uhabwirwa n’ikigabiro gihari, nta kundi kuhabona hitabwaho kugeza ubu.
          </motion.p>
          <h1 className='mt-6 font-medium text-slate-400'>
            Inkomoko y’abatuye u Rwanda
          </h1>

          <Link to="/inkomoko">
            <button className='w-full h-10 mt-6 mb-4 text-white bg-green-600 rounded-lg shadow-xl sm:w-32   hover:text-black '>

              Komeza Usome
            </button>
          </Link>
        </div>

        <div className='flex flex-col items-center w-full gap-4  rounded-lg shadow-lg lg:w-1/4 lg:mt-5'>

          <div className='w-40 h-40'>
            <img src="ibiseke.jpeg" alt="" className='w-full h-full rounded-lg ' />
          </div>
          <div className='w-40 h-40'>
            <img src="inyambo.jpg" alt="" className='w-full h-full rounded-lg ' />
          </div>
          <div className='w-40 h-40'>
            <img src="intore.jpeg" alt="" className='w-full h-full rounded-lg ' />
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center px-16 py-12 pb-4 mb-4   lg:flex-row  sm:px-9 gap-7'>
        <img src="/connect.jpg" alt="" className='object-cover w-full rounded-lg h-96 lg:w-1/2 sm:h-80 md:h-96' />
        <div className='w-full lg:w-1/2 '>
          <h1 className='mb-4 text-2xl font-bold text-center sm:text-3xl md:text-4xl mt-3'>
            ITUMANAHO RYO HAMBERE
          </h1>
          <p className='text-center  text-1xl sm:text-lg'>
            U Rwanda ryohambere itumanaho ryakorwaga n’abitwa impayamaguru hamwe n’abantu bafite amajwi aranguruye.Impamvu yo gukoresha ’impayamaguru’ ni uko zabaga zitwaye ubutumwa bw’ibanga ibwami badashaka ko bujya ku karubanda, ariko iyo byabaga ari amakuru asanzwe hifashishwaga abantu bafite amajwi aranguruye.
          </p>
          <p className='mt-1 text-center sm:text-lg text-1xl'>
            Ari nk’umuntu wapfuye bashakaga umuntu uhagarara ku gasozi ahirengeye akabwira abandi bari ku tundi dusozi, nabo bagahagarara ahirengeye bakabwira abandi bo ku dusozi two hirya yaho, gutyo gutyo".
            Ibitabo by’amateka y’u Rwanda bikomeza bigaragaza ko hari n’aho bakoreshaga ingoma, zikagira imurishyo itandukanye bitewe n’icyo i bwami bashaka kubwira abaturage.
            Nk’urugero, umurishyo w’ingoma y’impuruza ihururiza abaturage kwitabira urugamba wabaga utandukanye n’umurishyo w’ingoma ibika itanga ry’umwami(yapfuye), cyangwa uwo kuvuga amacumu y’ingabo zatabarutse ku rugamba.
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center px-6 pb-6 mb-4 rounded-md shadow-md lg:flex-row  sm:px-9 gap-7'>
        <div className='w-full lg:w-1/2'>
          <h1 className='mb-4 text-2xl font-bold text-center sm:text-3xl md:text-4xl mt-7'>
            UKO BAKORAGA INGENDO
          </h1>
          <p className='text-center  sm:text-lg text-1xl'>
            U Rwanda ryohambere Indege n'imodoka bitaraza ingendo zakorwaga hifashishijwe igikoresho bita INGOBYI.
          </p>

          <p className='mt-4  text-center sm:text-lg text-1xl'>
            Ingobyi yishwashishwaga mugutwara Abami igehe babaga bakeneye gutembere igihugu cyabo, ndetse ikaba yaranifashishwaga mugutwara Umugeni igihe agiye kurongorwa ndetse kandi yanifashishwaga mukujyana abarwayi kwa muganga.

          </p>
        </div>
        <div className='w-full h-64 px-6 lg:w-1/2 sm:h-80 md:h-96 lg:px-0'>
          <img src="/ingo.png" alt="" className='object-cover w-full h-full rounded-lg' />
        </div>
      </div>
    </div>
  );
};

export default Practice;
