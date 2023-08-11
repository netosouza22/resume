"use client"

import DeveloperImage from '@/assets/dev-final-img.png';
import { classTranslate } from '@/utils/TailwindVarHelper';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function TitleSection() {

  const [isIntersecting, setIsIntersecting] = useState(false)

  const ref = useRef(null);

  useEffect(() => {
    const Observer: any = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    })


    Observer.observe(ref.current);

    return () => Observer.disconnect;
  }, [])


  return (
    <section
      ref={ref}
      className="m-auto max-w-6xl 
      flex align-middle content-between justify-center space-x-5 mt-12 mb-6 
      md:space-x-20 
      lg:px-24
      ">
      <div className={`hidden h-[22.75rem] w-96 bg-pb-light md:flex
      ${!isIntersecting
          ? '-translate-x-[150%] opacity-0'
          : classTranslate.toRight} 
        duration-300`}>
        <Image src={DeveloperImage} alt="Image do desenvolvedor" />
      </div>

      <div className={`h-auto w-96 flex md:items-center m-auto
      ${!isIntersecting
          ? '-translate-x-[150%] opacity-0'
          : classTranslate.toLeft} 
       duration-500`}>
        <div className="space-y-4" >
          <h1 className="relative text-gray-dark text-[2.5rem] font-bold leading-10 z-10
                        before:absolute before:-z-20
                        before:content-shape-mark before:-top-4 before:-left-6
                        md:text-[2.5rem] md:leading-[3.5rem]
                        md:before:content-shape-mark-lg md:before:-top-7 md:before:-left-12
                        lg:text-main-title lg:leading-70
                        "

          >
            Desenvolvedor <br className="none" /> Front End
            <span className="text-pb-light">.</span>
          </h1>
          <p className=" text-gray-8 text-base">
            Meu nome é <span className="font-bold"> Antônio Assis de Sousa Neto </span>
            , <br />
            Localizado no Ceará <span role="img" aria-label="sun">☀️</span>
          </p>
        </div>
      </div>
    </section >
  )
}