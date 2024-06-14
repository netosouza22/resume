'use client';
import Link from "next/link";
import { useState } from "react";
import { BiDownload } from 'react-icons/bi';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';


export default function Header() {

  const [showMenu, setShowMenu] = useState<boolean>(false)

  const handleToggleShowMenu = () => {
    setShowMenu(state => !state)
  }


  return (
    <header className="m-auto max-w-6xl justify-between align-middle pt-6 md:flex">
      <div className="flex justify-between">
        <div className="text-black text-5xl font-bold">
          NETO
        </div>

        <div className="flex itens-center cursor-pointer text-gray-10 md:hidden" onClick={() => handleToggleShowMenu()}>
          {
            !showMenu
              ? <HiOutlineMenuAlt1 size="2rem" color="bg-gray-10" />
              : <IoCloseSharp size="2rem" color="bg-gray-10" />
          }
        </div>
      </div>

      <nav
        className={`
          absolute
  
          w-full 
          bg-white
          ${!showMenu ? '-top-64' : 'h-screen py-20 top-[4.5rem] duration-500'} 
          left-0 
          z-20 
          items-center 
          md:relative md:flex md:py-0 md:top-0 md:h-auto md:justify-end`
        }>
        <ul className="flex flex-col items-center bg-white text-gray-8  text-base font-medium md:flex-row md:space-x-10 ">

          <li className="my-3  hover:text-pb duration-500 md:my-0">
            <Link href={"#work-experience"} onClick={handleToggleShowMenu}>
              Experiências
            </Link>
          </li>
          <li className="my-3  hover:text-pb duration-500 md:my-0">
            <Link href={"#education"} onClick={handleToggleShowMenu}>
              Formação
            </Link>
          </li>
          <li className="my-3  hover:text-pb duration-500 md:my-0">
            <Link href={"#contact-me"} onClick={handleToggleShowMenu}>
              Contato
            </Link>
          </li>
          <li className="my-3  md:my-0">
            <a href="/assets/antonio_assis_de_sousa_neto_curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer">

              <button className="flex items-center gap-3 px-7 py-[0.375rem] bg-pb-dark rounded-lg text-white hover:bg-pb duration-500"
              >
                Baixar CV
                <BiDownload />
              </button>
            </a>

          </li>
        </ul>
      </nav>

    </header>
  )
}