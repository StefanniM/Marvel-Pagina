import React from "react";
import Contenedor from "../container/HocContainer";
import BotonIzquierdo from "./JoinButton";
import BotonesDerechos from "./SubscriptionsSearchButtons";

const items = [
  "NEWS",
  "COMICS",
  "CHARACTERS",
  "MOVIES",
  "TV SHOWS",
  "GAMES",
  "VIDEOS",
  "MORE"
]


const Cabecera = () => {
  return (
    <div className='bg-stone-800 fixed w-full text-white z-50'>
      <Contenedor className='h-14 border-b border-solid border-gray-500'>
        <div className='h-[inherit] flex justify-between'>
          <BotonIzquierdo />
          <div className='h-[55px] w-32 bg-red-600'>
            <a href='/'></a>
          </div>
          <BotonesDerechos />
        </div>
      </Contenedor>
      <Contenedor className='h-10'>
        <nav>
        <ul className='flex justify-center h-10'>
          {items.map((v) => (
            <li
              className='px-4 font-normal text-xs my-auto cursor-pointer list-none'
              key={v}>
              {v}
            </li>
          ))}
        </ul>
        </nav>
      </Contenedor>
    </div>
  );
};

export default Cabecera;
