import { useState } from 'react'
import './App.css'
import Cabecera from './ui/header/Header'
import Contenedor from './ui/container/HocContainer';

function App() {
  return (
    <div>
      <Cabecera />
      <div className="bg-[url('https://cdn.marvel.com/content/1x/157hap_com_mas_dsk_03_0.jpg')] w-screen max-h-[640px] h-screen">
        <Contenedor>
          <div className='grid grid-cols-2'>
            <div className='col-span-1 px-5 my-auto h-[640px] flex relative'>
              <div className='my-auto  text-left'>
                <h1 className='flex flex-col'>
                  <span className='text-base mb-8 font-semibold'>Henry Jonathan Pym</span>
                  <span className='text-4xl mb-4 font-bold'>Hank Pym</span>
                </h1>
                <p>
                  Dr. Henry “Hank” Pym, the creator of the wondrous Pym Particles, has been a crimefighting hero, brilliant inventor, and fearless explorer.
                </p>
              </div>
              <nav className='absolute -bottom-4 left-0'>
                <ul className='list-none flex gap-0.5'>
                  <li className='bg-stone-800 h-[66px] max-w-[130px] flex'>
                    <a className='px-5 my-auto' href='#'>
                      <span className='text-zinc-600'>Overview</span>
                    </a>
                  </li>
                  <li className='bg-stone-800 h-[66px] max-w-[130px] flex border-t-4 border-red-600'>
                    <a className='px-5 my-auto' href='#'>
                      <span className='text-white'>In Comics Profile</span>
                    </a>
                  </li>
                  <li className='bg-stone-800 h-[66px] max-w-[130px] flex'>
                    <a className='px-5 my-auto' href='#'>
                      <span className='text-zinc-600'>In Comics Full Report</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
        </Contenedor>
      </div>
    </div>
  );
}

export default App
