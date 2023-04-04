import React from "react";
import { CiSearch } from "react-icons/ci";

const BotonesDerechos = () => {
  return (
    <div className='border-x border-solid border-gray-500 flex'>
      <div className='px-3.5 border-r border-solid border-gray-500 cursor-pointer flex h-14'>
        <img
          className='my-auto mr-2.5'
          width={22}
          height={25}
          src='https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png'
          alt='Marvel Unlimited'
        />
        <div className='flex flex-col my-auto'>
          <p className='font-normal text-sm text-center'>MARVEL UNLIMITED</p>
          <p className='font-normal text-sm text-center mt-0.5'>SUSCRIBE</p>
        </div>
      </div>
      <div className='px-3.5 my-auto h-4'>
        <CiSearch size='17px' />
      </div>
    </div>
  );
};

export default BotonesDerechos;
