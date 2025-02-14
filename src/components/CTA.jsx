import React from 'react';
import { NavLink } from 'react-router-dom';
import cta from '../assets/cta.jpg';
import Logo01 from '../assets/Logo01.jpg';

export default function CTA() {
    return (
        <>
<div className="border m-1 flex flex-col lg:flex-row h-screen bg-black bg-opacity-70 rounded-lg">
  <div className="w-full lg:w-4/10 h-screen flex items-center justify-center p-4 sm:p-8 md:p-12">
    <img className="max-w-full max-h-full" src={Logo01} alt="logo1" />
  </div>
  <div className="w-full lg:w-6/10 h-screen flex items-center justify-center">
    <img className="max-w-full max-h-full" src={cta} alt="index" />
  </div>
</div>




        </>

    );
}



/* 
        <div className="relative h-screen overflow-hidden rounded-lg m-2 ">
            <div
                className="absolute w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${cta})` }}
            ></div>
            <div className="bg-black bg-opacity-70 w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12">
                <section className="text-center bg-gray-900 bg-opacity-80 p-6 rounded-xl border-4 border-yellow-500 shadow-2xl sm:w-2/3 md:w-1/2 lg:w-1/3 z-10">
                    <h2 className="text-3xl font-extrabold mb-6 sm:text-4xl md:text-5xl text-yellow-400 drop-shadow-lg">
                        ¡Sonría, sonría!
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">
                        ¡Ya llegó el Pulque!
                    </p>
                    <NavLink
                        to="/menu-pulquero"
                        className="inline-block bg-yellow-500 text-black py-2 px-6 rounded-full text-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 sm:py-3 sm:px-8 sm:text-xl"
                    >
                        Navegar
                    </NavLink>
                </section>
            </div>
        </div>

*/