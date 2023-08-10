"use client"

import { BiSolidToTop } from 'react-icons/bi'

export default function ToTopButton() {

  const goToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <button
      title="Ir para o topo"
      className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-pb
      flex items-center justify-center text-white
      shadow-lg
    " onClick={goToTop}>
      <BiSolidToTop size={32} />
    </button>
  )
}