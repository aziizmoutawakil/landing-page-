import React from 'react'

function About() {
  return (
    <div id='about'>
       <section className="py-10" id="services">
<div className="container  mx-auto px-4 bg-white">
    <h2  className="text-6xl  text-gray-800 mb-10 text-center font-poppins"> À propos de nous</h2>
   </div> </section>
      <section className="bg-gray-100 ">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            
            <div className="max-w-lg">
                <h2 className="text-3xl  text-gray-800 mb-8  text-center uppercase font-poppins"> Infocom</h2>
                <p className="mt-4 text-gray-600 text-lg">
                est une société ayant pour activité l'importation et la distribution de matériel informatique produits de surveillance des fournitures de bureau les consommables réseaux ... avec une meilleur qualité et prix compétitifs et un service livraison rapide.Infocom est une entreprise dynamique spécialisée dans l'importation et la distribution de matériel informatique de pointe, de produits de surveillance ultramodernes, de fournitures de bureau essentielles et de consommables réseau complets. Nous sommes fiers de proposer une qualité supérieure, des prix compétitifs et un service de livraison rapide pour garantir le bon fonctionnement de votre entreprise. Que vous ayez besoin de technologies de pointe ou de fournitures de bureau au quotidien, Infocom est votre partenaire de confiance pour tous vos besoins professionnels.</p>
                </div>
            <div className="mt-12 md:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default About
