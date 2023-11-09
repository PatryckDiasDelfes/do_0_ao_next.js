"use client"

import { useRouter } from 'next/router';

export default function Header() {
  return (

      <header className="gap-14">
        <div className="flex bg-[#24221a] h-28 justify-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-white font-bold text-[4em] pt-14">
              Jogo da velha
            </h1>
            <span className="text-white text-[2em]">
              Next.js
            </span>
            {/* <button className='text-[20px] font-semibold text-[white] border border-solid'> 
              <a href="http://localhost:3000"> Reload </a>
            </button> */}
          </div>
          
        </div>
        
      </header>

    )
}
