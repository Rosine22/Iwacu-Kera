import React from 'react';
import SubNav from '../Components/SubNav';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Abami = () => {
    return (
        <div className='bg-white'>
            <SubNav />

            <div className='min-h-screen py-40 px-11'>
                <div className='px-6 py-20 rounded-md  sm:px-12 md:px-24 lg:px-36 xl:px-48 bg-slate-50'>
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='pb-3 text-4xl font-extrabold text-center text-black mb-7'
                    >
                        AMATEKA Y'ABAMI B'URWANDA
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='text-center'
                    >
                        U Rwanda rwagiye rutegekwa n’abami batandukanye kuva rwabaho kugeza ubwo abanyamateka babagabanyamo ibyiciro bitatu bakurikije ibihe aribyo: Abami b’ibimanuka, abami b’umushumi n’abami b’ibitekerezo. Abami b’Ibimanuka ni abakomoka kuri Shyerezo, Abami b’umushumi ni abatazwi igihe bategekeye n’ibyabaye ku Ngoma zabo, naho Abami b’Ibitekerezo ni Abami bazwi neza igihe bategekeye n’ibyabaye ku ngoma zabo. Abami b’Ibimanuka bahera kuri Shyerezo bakagera kuri Kazi. Naho Abami b’umushumi bahera kuri Gihanga cyahanze Inka n’Ingoma bakagera kuri Cyilima I Rugwe. Abami b’Ibitekerezo ari nabo ba nyuma bahera kuri Kigeli I Mukobanya bakageza ku Mwami wa nyuma w’u Rwanda ariwe Kigeli V Ndahindurwa.
                    </motion.p>
                </div>
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="my-8 text-3xl font-bold text-center text-blue-700"
                >
                    Dore uko abami bategetse u Rwanda bagiye bakurikirana:
                </motion.h1>
                <div className='px-6 sm:px-12 md:px-24 lg:px-36 xl:px-8'>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full border border-collapse border-gray-500 table-auto">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-2 text-blue-400 border border-gray-500">Nimero</th>
                                    <th className="p-2 text-blue-400 border border-gray-500">Umwami</th>
                                    <th className="p-2 text-blue-400 border border-gray-500">Itariki y'ubwami</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                        <td className="p-2 border border-gray-500">1</td>
                                        <td className="p-2 border border-gray-500">Gihanga I Ngomijana</td>
                                        <td className="p-2 border border-gray-500">1091-1124</td>
  
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-gray-500">2</td>
                                        <td className="p-2 border border-gray-500">Kanyarwanda I Gahima</td>
                                        <td className="p-2 border border-gray-500">1124-1157</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-gray-500">3</td>
                                        <td className="p-2 border border-gray-500">Yuhi I Musindi</td>
                                        <td className="p-2 border border-gray-500">1157-1180</td>
                                    </tr>

                                    <tr>
                                        <td className="p-2 border border-gray-500">4</td>
                                        <td className="p-2 border border-gray-500">Ndahiro I Ruyange</td>
                                        <td className="p-2 border border-gray-500">1180-1213</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-gray-500">5</td>
                                        <td className="p-2 border border-gray-500">Ndoba</td>
                                        <td className="p-2 border border-gray-500">1213-1246</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">6</td>
                                        <td className="p-2 border border-black">Samembe</td>
                                        <td className="p-2 border border-black">1246-1279</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">7</td>
                                        <td className="p-2 border border-black">Nsoro I Samukondo</td>
                                        <td className="p-2 border border-black">1279-1312</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">8</td>
                                        <td className="p-2 border border-black">Ruganzu I Bwimba</td>
                                        <td className="p-2 border border-black">1312-1345</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">9</td>
                                        <td className="p-2 border border-black">Cyilima I Rugwe</td>
                                        <td className="p-2 border border-black">1345-1378</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">10</td>
                                        <td className="p-2 border border-black">Kigeli I Mukobanya</td>
                                        <td className="p-2 border border-black">1378-1411</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">11</td>
                                        <td className="p-2 border border-black">Mibambwe I Sekarongoro I Mutabazi I</td>
                                        <td className="p-2 border border-black">1411-1444</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">12</td>
                                        <td className="p-2 border border-black">Yuhi II Gahima II</td>
                                        <td className="p-2 border border-black">1444-1477</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">13</td>
                                        <td className="p-2 border border-black">Ndahiro II Cyamatare</td>
                                        <td className="p-2 border border-black">1477-1510</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">14</td>
                                        <td className="p-2 border border-black">Ruganzu II Ndoli</td>
                                        <td className="p-2 border border-black">1510-1543</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">15</td>
                                        <td className="p-2 border border-black">Mutara I Nsoro II Semugeshi</td>
                                        <td className="p-2 border border-black">1543-1576</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">16</td>
                                        <td className="p-2 border border-black">Kigeli II Nyamuheshera</td>
                                        <td className="p-2 border border-black">1576-1609</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">17</td>
                                        <td className="p-2 border border-black">Mibambwe II Sekarongoro II Gisanura</td>
                                        <td className="p-2 border border-black">1609-1642</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">18</td>
                                        <td className="p-2 border border-black">Yuhi III Mazimpaka</td>
                                        <td className="p-2 border border-black">1642-1675</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">19</td>
                                        <td className="p-2 border border-black">Cyilima II Rujugira</td>
                                        <td className="p-2 border border-black">1675-1708</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">20</td>
                                        <td className="p-2 border border-black">Kigeli III Ndabarasa</td>
                                        <td className="p-2 border border-black">1708-1741</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">21</td>
                                        <td className="p-2 border border-black">Mibambwe III Mutabazi II Sentabyo</td>
                                        <td className="p-2 border border-black">1741-1746</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">22</td>
                                        <td className="p-2 border border-black">Yuhi IV Gahindiro</td>
                                        <td className="p-2 border border-black">1746-1802</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">23</td>
                                        <td className="p-2 border border-black">Mutara II Rwogera</td>
                                        <td className="p-2 border border-black">1802-1853</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">24</td>
                                        <td className="p-2 border border-black">Kigeli IV Rwabugili</td>
                                        <td className="p-2 border border-black">1853-1895</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">25</td>
                                        <td className="p-2 border border-black">Mibambwe IV Rutarindwa</td>
                                        <td className="p-2 border border-black">1895-1895</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">26</td>
                                        <td className="p-2 border border-black">Yuhi V Musinga</td>
                                        <td className="p-2 border border-black">1895-1931</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">27</td>
                                        <td className="p-2 border border-black">Mutara III Rudahigwa</td>
                                        <td className="p-2 border border-black">1931-1959</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-black">28</td>
                                        <td className="p-2 border border-black">Kigeli V Ndahindurwa</td>
                                        <td className="p-2 border border-black">1959-1960</td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className='flex flex-col gap-5 px-6 mt-10 sm:gap-16 md:gap-20 lg:gap-5 sm:px-12    '>
                    <div className='flex flex-col mt-8  rounded-lg   lg:flex-row sm:px-9 gap-7'>
                        <img src="../public/umwami1.jpg" alt="Gihanga I Ngomijana" className='w-1/2 sm:w-1/2' />
                        <div className='p-4'>
                            <h2 className='mb-2 font-medium'>AMATEKA YA Gihanga I Ngomijana (1091-1124)</h2>
                            <p>Uyu Mwami witwa Gihanga niwe ntangiriro y’ubutegetsi bw’ingoma Nyiginya(fondateur de la dynastie) ni nawe washyizeho gahunda y’Igihugu gitegekwa n’Abami. Mu ntangiriro z’ubutegetsi bwe, Gihanga nta ngoma yimanye, ahubwo yategekeshaga ibindi birango bibiri aribyo inyundo n’ikindi gikoresho cy’umuziki bita urusengo.</p>
                            <h2 className='mt-2 mb-2 font-medium text-sky-400'>Gihanga yarongoye Abagore benshi</h2>
                            <p>Ikindi amateka garagaza, avuga ko Gihanga yagiye abyara abana batandukanye badahuje ba nyina kuko nawe yari afite abagore benshi nk'uko byari bisanzwe bimenyerewe mu Rwanda rwo ha mbere</p>
                            <Link to='/gihanga'>
                                <button className='w-32 h-10 mt-4 text-white bg-green-600 rounded-lg shadow-xl  hover:text-black'>Komeza Usome</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col mt-8  rounded-lg   h-96 lg:flex-row sm:px-9 gap-7'>
                        <img src="/gahima.jpg" alt="Kanyarwanda I Gahima" className='w-1/2 sm:w-1/2 ' />
                        <div className='p-4'>
                            <h2 className='mt-20 mb-2 font-medium'>AMATEKA YA Kanyarwanda I Gahima (1124-1157)</h2>
                            <p className=''>Kanyarwanda Gahima waje asimbuye se ku ngoma akaba ngo ari yo mpamvu yahawe ririya zina rya Kanyarwanda kubera inshingano yari asigiwe na se Gihanga zo gukomeza kwagura ubutaka yari arazwe</p>
                            <Link to='/gahima'>
                                <button className='w-32 h-10 mt-4 text-white bg-green-600 rounded-lg shadow-xl  hover:text-black'>Komeza Usome</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col mt-8  rounded-lg   lg:flex-row sm:px-9 gap-7 '>
                        <img src="/yuhi.jpg" alt="Yuhi Musindi" className='w-full ' />
                        <div className='p-4'>
                            <h2 className='mb-4 font-medium'>AMATEKA YA Yuhi Musindi (1157-1180)</h2>
                            <p>Umwami wakurikiye Kanyarwanda ku itonde ry’abami b’umushumi yitwa Yuhi Musindi akaba yaranitwaga Yuhi ry’i Gara.Aka gace ka Gara rero ngo bishoboka ko baba barashakaga kuvuga Ngara ya Rubungo yari iherereye mu karere ka Bwanacyambwe nkuko ubushakashatsi bubigaragaza. Uyu Mwami niwe mukurambere w’ubwoko bw’ Abasindi ari naho ubu bwoko bukomora iryo zina nkuko benshi mu buzukuru ba Gihanga bagiye batanga amazina y’ubwoko bubakomokaho.</p>
                            <p>Umwami Yuhi V Musinga ni umwe mu bayoboye u Rwanda wagize inyeshyamba z’abasirikari n’ubwo yaje gutakaza intambara n’abazungu bashakaga colonisation y’u Rwanda. Abasirikari be bazwi nk’inyamibwa barwanye intambara yo kurwanya abazungu n’ubwo batakaje.</p>
                            <Link to='/yuhi'>
                                <button className='w-32 h-10 mt-4 text-white bg-green-600 rounded-lg shadow-xl  hover:text-black'>Komeza Usome</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col mt-8 rounded-lg  lg:flex-row sm:px-9 gap-7'>


                            <img src="/abami.jpeg" alt="" className='w-1/2 sm:w-1/2' />
                            <div>
                                <h2 className='mt-5 mb-5 font-medium'>AMATEKA YA Yuhi II Gahima (1444-1477)</h2>
                                <p>Umwami Yuhi II Gahima ni mwene Sekarongoro na Matama ya Bigega. Na we azwiho kuba yarashatse abagore benshi ariko amateka atugaragariza babiri gusa barimo Nyirangabo za Nyantabana na Nyankaka wa Samukende, aho babyaranye abana bagera ku munani.</p>
                                <Link to='/gahima'>
                                    <button className='w-32 h-10 mb-4 ml-20 text-white bg-green-600 rounded-lg shadow-xl  hover:text-black mt-7'>Komeza</button>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
            <div className='px-20 bg-gray-50 '>
        <h1 className='mb-4 text-4xl font-extrabold text-center capitalize'> Abami 10 bashatse abagore benshi mu mateka y’u Rwanda</h1>
        <p className='mb-4'> Ikizwi neza ni uko urushako rw’Abami b’u Rwanda rwagengwa n’Abiru bifashishije indagu. Hari igihe umwami yashakaga abagore benshi bo guhishira umugore w’ingabwa ari na we watangwaga n’indagu nk’uzavamo umugabekazi uzabyarira u Rwanda umwami ngo hato atamenyekana hakiri kare.</p>
        <h1  className='mt-4 mb-4 text-2xl font-medium text-center'>Umwami Yuhi V Musinga</h1>
        <p>Umwami Yuhi V Musinga, yatwaye u Rwanda kuva mu wa 1896 kugeza mu wa 1931. Ni we mwami waciye agahigo ko gushaka abagore benshi kurusha abandi bami bamubanjirije ndetse n’abatwaye u Rwanda muri rusange, aho yashatse abagore 21 bakabyarana abana 43.

Benshi mu bagore Musinga yashatse bakomokaga mu muryango mugari w’Abega aho yibanze cyane kuri babyara be bakomoka kwa basaza ba nyina Kanjogera.</p>
<h1 className='mt-4 mb-4 text-2xl font-medium text-center'>Umwami Gihanga I Ngomijana</h1>
<p> Yaciye agahigo katigeze kagerwaho n’uwo ari we wese ko kuba ari we wahanze u Rwanda, agakura umuryango we w’Abanyiginya mu busembere barimo mu ngoma y’u Rweya rw’u Mubali bari bamazemo imyaka iyingayinga 400 (700-1091).

Amateka agaragaza ko yashatse abagore bane babyarana abana icyenda.

Urushako rwa Gihanga rutandukanye n’urw’abandi bami bazwi ko bashatse abagore benshi, aho we yashatse abagore benshi kubera impamvu za politiki.

Gihanga yasanze imiryango y’Abasinga n’Abazigaba yironda mu miryango yabo nta n’umwe ushobora kujya gushaka mu wundi muryango nuko yadukana ikintu kitari gisanzwe mu bihugu by’Abasangwabutaka cyo gushaka abagore bane badasangiye inkomoko na we.

Gihanga yashatse Nyirampirangwe wa Rwamba akaba umwenengwekazi wo mu Bungwe, ashaka Nyangobero wa Ngabo akaba umushikazi wo mu Bunyabungo, anashaka Nyamususa wa Jeni w’umusingakazi na Nyirampingiye na we w’umusingakazi bo mu Budaha n’u Bwishaza.</p>
<h1 className='mt-4 mb-4 text-2xl font-medium text-center'>Umwami Kigeli IV Rwabugili</h1>
        <p> Umwami Kigeli IV Rwabugili, ni mwene Rwogera rwa Gahindiro na Murorunkwere wa Nzirumbanje. Yatwaye u Rwanda kuva mu 1853 kugeza muri 895. Ni umwe mu bami baciye agahigo ko gushaka abagore benshi, aho yayingayingaga umuhungu we Musinga.

Yashatse abagore 20 babyarana abana 17. Abagore be yari yaragabanyijemo ibyiciro ashingiye ku cyubahiro bahabwaga ibwami barimo amatsinda atatu ari yo Amagaju, Abaterambabazi, Abatahanashyaka, Abakina n’Inyamibwa.

Nubwo amateka adutekerereza ko Rwabugili yagiraga imico yo gukunda abagore ariko na none adutekerereza ko mu cyamuteye gushaka abagore benshi ari uko yari afite ingoro nyinshi mu gihugu, byatumye ashaka abagore benshi bo kuzibamo no kuzikenura banacunga imitungo yazibagamo n’abagaragu.</p>
<p>Mu bami 28 batwaye u Rwanda bagize ingoro 120, nyamara umwami Rwabugili yari yihariye 38 ari umwe.

Hari aho amateka atugaragariza ko nubwo yari afite abagore basaga 20, hari abagera ku 10 atigeze abyarana na bo, kubera kubura umwanya wo gusabana nabo kuko kenshi na kenshi yabaga yibereye mu mahanga yagabyeyo ibitero.</p>
<h1 className='mt-4 mb-4 text-2xl font-medium text-center'>Umwami Mibambwe I Sekarongoro I Mutabazi I</h1>
<p> Uyu ni mwene Mukobanya wa Rugwe na Nyabadaha ya Ngoga, yimye ingoma ahasaga mu wa 1411 kugeza mu wa 1444. Ni umwami wa 11 mu bami 28 batwaye u Rwanda.

Sekarongoro na we azwiho kuba yarashatse abagore benshi ariko amateka agaragaza babiri gusa barimo Matama ya Bigega na Shetsa bakundaga kwita Nyirahondi.

Ikindi azwiho n’uko yabyaye abana benshi cyane cyane abo yabyaranye na Shetsa, ari na ho umugani w’imyarumbo za Nyirahondi waturutse, babona umuntu ufite abana benshi bamuburiye uburyo, bakavuga ngo ’Bene naka ni imyarumbo za Nyirahondi".</p>
<h1 className='mt-4 mb-4 text-2xl font-medium text-center'>Umwami Yuhi II Gahima</h1>
<p>Umwami Yuhi II Gahima ni mwene Sekarongoro na Matama ya Bigega. Na we azwiho kuba yarashatse abagore benshi ariko amateka atugaragariza babiri gusa barimo Nyirangabo za Nyantabana na Nyankaka wa Samukende, aho babyaranye abana bagera ku munani.</p>
<h1 className='mt-4 mb-4 text-2xl font-medium text-center'>Umwami Ruganzu II Ndoli</h1>
<p>Umwami Ruganzu II Ndoli ni mwene Cyamatare cya Gahima na Nyabacuzi ba Kibogora, yimye ingoma ahasaga mu wa 1510 kugeza mu wa 1543. Ni umwami wa 14 mu bami batwaye u Rwanda.

Amateka yerekeana ko yashatse abagore babiri babyarana abana babiri bonyine. Abo bagore yashatse barimo Nyirakabogo babyaranye Semugeshi wamuzunguye ku ngoma na Nyiranzinge babyaranye Nyirantebe.</p>
<h1 className='mt-4 mb-4 text-2xl font-medium text-center'>Umwami Cyilima II Rujugira</h1>
<p>Umwami Cyilima II Rujugira, ni mwene Mazimpaka za Gisanura na Kirongoro cya Kagoro. Yatwaye u Rwanda ahasaga mu wa 1675 kugeza mu wa 1708. Ni umwami wa 19 mu bami 28 batwaye u Rwanda.

Cyilima Rujugira na we azwiho kuba yarashatse abagore benshi nubwo amateka agaragaza babiri barimo Kirongoro cya Kagoro na Rwesero rwa Muhoza.

Abagore bose Rujugira yashatse bazwiho kuba yarabyaye abana benshi kandi bakundanaga cyane ndetse ni bo baje guhabwa igisingizo kigira kiti: ‘’Abatangana bene Rujugira, ijana rizira imisago.’’</p>
<h1 className='mt-4 mb-4 text-2xl font-medium text-center'>Umwami Kigeli III Ndabarasa</h1>
<p>Umwami Kigeli III Ndabarasa, ni mwene Rujugira rwa Mazimpaka na Rwesero rwa Muhoza. Yatwaye u Rwanda ahasaga mu wa 1708 kugeza mu wa 1741.

Mu bagore Kigeli Ndabarasa yashatse harimo Nyitatamba rya Sesonga na Mandwa za Rutabana. Abagore bose Rujugira yashatse bazwiho kuba yarabyaye abana benshi, abazwi bakaba bagera kuri 14.</p>
<h1 className='mt-4 mb-4 text-2xl font-medium text-center'>Umwami Yuhi IV Gahindiro</h1>
<p>Umwami Yuhi IV Gahindiro, mwene Sentabyo bya Ndabarasa na Nyiratunga wa Rutabana, yatwaye u Rwanda ahasaga mu wa 1746 kugeza mu wa 1802, ni umwe mu bami bashyize imbaraga nyinshi mu murage w’u Rwanda, maze ararwubaka karahava!!!

Biri n’amahire kuko ingoma ye yamaze igihe kirekire kuruta izindi z’abamubanjirije n’abamuherutse, kuko yamaze imyaka isaga 56. Ni umwami wa 22 mu bami 28 batwaye u Rwanda.

Yuhi Gahindiro na we azwiho kuba yarashatse abagore benshi icyakora amateka atugaragariza umwe gusa ari we Nyiramongi wa Gaga wari nyina wa Rwogera wazunguye se Rwogera ku ngoma.

Abagore bose Rujugira yashatse bazwiho kuba yarabyaye abana benshi, abazwi bakaba bagera kuri 14.</p>


      </div>
        </div>
    );
};

export default Abami;
