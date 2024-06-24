import React from 'react'
import cameraa from'../../assets/camera.jpg'
import Market from '../../assets/market.jpg'
import rezeau from '../../assets/rezau.jpg'
import alarme from '../../assets/alarm.jpg'
import porte from '../../assets/port.jpg'
import pc from '../../assets/pcs.jpg'
function Service() {
  return (
    <div id="services">
        <section className="py-10">
    <div className="container mx-auto px-4 bg-white font-poppins">
        <h2   className="text-6xl  text-gray-800 mb-20 text-center ">Les Services</h2>
       
    

   
        <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={Market} alt="gem" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4  md:text-left lg:pl-12 font-poppins">
            <h3 className=" mt-8 text-2xl md:mt-0 sm:text-2xl">
            SETUP EGLE 
            </h3>
            <p className="sm:text-lg mt-6">
               
    SETUP EAGLE COMMERCIALE    <br />
    SETUP EAGLE COMPTABILITE <br />
    SETUP EAGLE POS CAFE <br />
    SETUP EAGLE POS RESTAURANT <br />
    SETUP EAGLE POS MARKET
    SETUP EAGLE POS SHOP

            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={cameraa} alt="project members" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className=" mt-8 text-xl md:mt-0 sm:text-2xl">
            System Surveillance
            </h3>
            <p className="sm:text-lg mt-6">
            Notre service de système de surveillance offre une solution complète pour la protection et la surveillance efficace de vos espaces et de vos biens. Nous mettons à votre disposition une gamme avancée de technologies et d'équipements de surveillance, adaptés à divers besoins industriels, commerciaux et résidentiels
            </p>
        </div>
    </div>

 
    <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={alarme} alt="gem" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4  md:text-left lg:pl-12 font-poppins">
            <h3 className=" mt-8 text-2xl md:mt-0 sm:text-2xl">
           System D'alarm  
            </h3>
            <p className="sm:text-lg mt-6">
            Notre service de système d'alarme propose une solution de sécurité proactive et fiable pour protéger vos biens et assurer votre tranquillité d'esprit. Nous offrons une gamme complète de systèmes d'alarme modernes et adaptés à divers environnements

            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={porte} alt="project members" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Port Automatique
            </h3>
            <p className="sm:text-lg mt-6">
            Certainly! If you're looking to describe a service related to "Port Automatique" (Automatic Gates), here's a description you can use:

Port Automatique

Notre service de port automatique offre une solution efficace pour la gestion et la sécurisation de vos accès. Nous proposons une gamme complète de portes automatiques et de systèmes de contrôle d'accès adaptés à divers environnements résidentiels, commerciaux et industriels. Que ce soit pour sécuriser votre propriété
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={pc} alt="gem" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4  md:text-left lg:pl-12 font-poppins">
            <h3 className=" mt-8 text-2xl md:mt-0 sm:text-2xl">
            Material Informatique 
            </h3>
            <p className="sm:text-lg mt-6">
            Certainly! If you're looking to describe a service related to "Matériel Informatique" (Computer Hardware), here's a description you can use:

Matériel Informatique

Notre service de matériel informatique propose une gamme complète de solutions pour répondre à vos besoins en équipements et accessoires informatiques. Nous offrons une sélection diversifiée de produits de haute qualité, allant des ordinateurs de bureau aux périphériques, en passant par les composants informatiques essentiels

            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={rezeau} alt="project members" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Réseau Informatique
            </h3>
            <p className="sm:text-lg mt-6">
            Notre service de réseau informatique offre une infrastructure robuste et sécurisée pour répondre aux besoins de connectivité et de communication de votre entreprise. Nous concevons, déployons et maintenons des réseaux informatiques fiables et performants, adaptés à vos exigences spécifiques en matière de technologie et de sécurité.
            </p>
        </div>
    </div>

  

    

    </div>
</section>
    </div>
  )
}

export default Service
