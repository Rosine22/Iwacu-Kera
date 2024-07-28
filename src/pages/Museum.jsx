import React from 'react'
import SubNav from '../Components/SubNav'
import { motion } from 'framer-motion';
const Museum = () => {
  return (
    <div>
      <SubNav />
      <div className='px-4 py-40 '>
        <div className='absolute px-8 py-5 mt-40 ml-8 font-semibold text-white md:px-16 md:ml-24 lg:px-24 lg:ml-52'>
          <motion.h1  initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }} className='mt-2 text-center md:text-3xl lg:text-6xl'>INZU NDANGA MURANGE</motion.h1>
          <motion.h1 initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }} className='mx-auto mt-4 text-xl text-center bg-orange-500 md:text-3xl lg:text-4xl lg:w-52'>NYANZA</motion.h1>
          <div>
          < motion.p initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }} className='max-w-md mx-auto  text-2xl mt-4 text-center font-medium md:max-w-lg lg:max-w-xl'>Inzu Ndangamurage ya Rukari, izwi kandi ku ngoro ndangamurage y’amateka ya kera y'u Rwanda. Ikaba  itanga incamake irambuye kuri gahunda ya cyami y'u Rwanda</motion.p>
          
          </div>
          
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>
          <img src="/nyanza.PNG" />
          <img src="/King.jpg" />

        </div>
      </div>
      <h1 className='mb-5 text-4xl font-bold text-center -mt-14'>Ibikoresho by'umuco</h1>
      <div className='grid justify-around grid-cols-1 gap-10 px-4 lg:grid-cols-4 md:grid-cols-2'>
        <div className='justify-center py-6 bg-white rounded-lg shadow-sm '>
          <img src="/uruswo.jpg"  />
          <p className='py-3 text-2xl font-bold text-center '>URUSYO</p>
          <p className=' ml-7 mt-7'>Urusyo rusobanura ibuye, rimeze nk'uruziga useraho (rwo gusya ingano), uruziga rukomey . Mu kwagura ikintu cyizengurutse cyane ibyatsi cyangwa uruziga rwa foromaje.</p>
        </div>
        <div className='justify-center py-6 bg-white rounded-lg shadow-sm '>
          <img src="/ingobyi.jpg"  />
          <p className='py-6 text-2xl font-bold text-center'>INGOBYI</p>
          <p className='ml-7'>Ingobyi ya Kinyarwanda ni igikoresho gifite ibigwi n’amateka ahambaye mu muco wu Rwanda, kikaba ari kimwe mu bigaragaza intekerezo z’ihangabuhanga abantu b'Abanyarwanda bari bakungahayeho aho yabafashaga guhanga ibikoresho .</p>
        </div>
        <div className='justify-center py-6 bg-white   rounded-lg shadow-sm'>
          <img src="/inkongoro.jpg"  />
          <p className='py-6 text-2xl font-bold text-center'>IGISABO</p>
          <p className='ml-7 '> Igisabo ni igikoresho cyubashywe mu muco nyarwanda kuva kera, cyifashishwa mu gikorwa cyo ‘gucunda amata’, amata nayo akaba ari ikinyobwa gifite intungamubiri nyinshi ku mubiri w’umuntu.</p>
          
        </div>
        <div className='justify-center py-6 bg-white rounded-lg shadow-sm '>
          <img src="/igicuma.webp" className=" h-60 " />
          <p className='py-6 text-2xl font-bold text-center'>UDUCUMA</p>
          <p className='ml-7 mt-1'> mumuco nyarwanda iyo umuntu yagusuraga wamyakirizaga icyokunywa nkinzoga ,amata ibi nibikoresho bakoreshaga banyweramo inzoga ,banazibikamo ibyo bita kuzitara kugirango zishye. </p>
        </div>
      
      </div>
    </div>
  )
}

export default Museum
