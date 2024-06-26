"use client";
import { classTranslate } from "@/utils/TailwindVarHelper";
import { tecnologyIcons } from "@/utils/TecnologyIcons";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import SquareIcon from "../common/SquareIcon";

export default function AboutMe() {

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
    <section ref={ref} className="m-auto max-w-6xl relative mb-[15px] md:mb-[3.75rem]" id="about-me">
      <SectionTitle title="sobre mim" />

      <div className={`flex gap-4 flex-wrap lg:flex-nowrap items-center md:gap-14 lg:gap-28 
               ${!isIntersecting
          ? '-translate-x-[150%] opacity-0'
          : classTranslate.toLeft} duration-700`}>
        <span className="text-sm text-gray-7 font-normal max-w-2xl md:text-base">
          Sou um profissional dedicado e curioso pela área de desenvolvimento web,
          particularmente relacionado ao <span className="font-bold text-pb-dark">front end e UI/UX design</span>,
          com <span className="font-bold text-pb-dark">+ 3 anos de experiência</span> nessa área e comprometido com a entrega.
          Tenho utilizado tecnologias como <span className="font-bold text-pb-dark">Javascript, HTML, CSS</span> e
          frameworks como <span className="font-bold text-pb-dark">Next Js, React JS, React Native e Vue JS </span>,
          sempre buscando evoluir minhas habilidades técnicas e interpessoais,
          através de constante estudo.
        </span>
        <aside className={`flex gap-5 flex-wrap justify-center md:gap-10 
        ${!isIntersecting
            ? '-translate-x-[150%] opacity-0'
            : classTranslate.toLeft} `}>
          {
            tecnologyIcons.map((item) => {
              return (<SquareIcon key={item.label} label={item.label} icon={item.icon}></SquareIcon>)
            })
          }
        </aside>
      </div>
    </section>)
}