'use client';
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';

export default function Header() {

  const [showMenu, setShowMenu] = useState<boolean>(false)

  const handleToggleShowMenu = () => {
    setShowMenu(state => !state)
  }

  return (
    <header className="m-auto max-w-6xl justify-between align-middle pt-6 md:flex">
      <div className="w-full flex justify-between">
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
            <Link href={"#about-me"}>
              Sobre mim
            </Link>
          </li>
          <li className="my-3  hover:text-pb duration-500 md:my-0">
            <Link href={"#work-experience"}>
              Experiências
            </Link>
          </li>
          <li className="my-3  hover:text-pb duration-500 md:my-0">
            <Link href={"#education"}>
              Formação
            </Link>
          </li>
          <li className="my-3  hover:text-pb duration-500 md:my-0">
            <Link href={"#contact-me"}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}