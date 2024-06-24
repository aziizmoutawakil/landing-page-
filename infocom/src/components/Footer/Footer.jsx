import React from 'react';

function Footer() {
  return (
    <div id='footer' className=' bg-[#FFEEA9] font-poppins'>
      <div className="">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5 flex flex-col">
            <h3 className="uppercase text-2xl text-orange-600">Infocom</h3>
            <p className='text-xm'>
              est une société ayant pour activité l'importation et la distribution de matériel informatique produits de surveillance des fournitures de bureau les consommables réseaux
            </p>
          </div>
          <div className="p-5 ">
            <div className="text-sm uppercase text-orange-600 font-bold">Produits</div>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block"  href="https://infocom.ma/fr/promotions" target="_blank" rel="noopener noreferrer">Promotions</a>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block"  href="https://infocom.ma/fr/nouveaux-produits" target="_blank" rel="noopener noreferrer">Nouveaux Produits</a>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block"  href="https://infocom.ma/fr/meilleures-ventes" target="_blank" rel="noopener noreferrer">Meilleurs Ventes</a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-orange-600 font-bold">Notre société</div>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block" href="https://infocom.ma/fr/content/2-mentions-legales">Mentions Légal</a>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block" href="https://infocom.ma/fr/content/3-conditions-generales-d-utilisation-et-de-vente">Conditions Générales D'utilitation Et De Vente</a>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block" href='https://infocom.ma/fr/content/4-a-propos'>A Propos</a>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block" href="https://infocom.ma/fr/content/5-paiement-securise">Paiement Sécurisé</a>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block" href="https://infocom.ma/fr/nous-contacter">Contactez-Nous</a>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block" href="https://infocom.ma/fr/magasins">Magasins</a>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block" href="https://deskcopieurpc.dyndns.org/">Help DECK</a>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block" href="https://www.infocomsystem.net/www.sav.net"> 	    Service Après Vente </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-orange-600 font-bold">Contact</div>
            <p className="my-3 block">INFOCOM SYSTEM sarl 589, Bvd 20 OUT SALE 11000 SALE Maroc</p>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block"  href="tel:+212661111153">0661111153</a>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block"  href="tel:+212661111152"> 0661111152</a>
            <a className="hover:scale-110 duration-300 hover:text-[#FF7D29] my-3 block" href="mailto:az.karakhi@gmail.com">az.karakhi@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="pt-2 font-poppins">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-900 text-sm flex-col max-w-screen-lg items-center">
        
          <div className="my-5">© 2024 - Boutique en ligne créée par Infocom System </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
