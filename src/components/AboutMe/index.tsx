"use client";
import { tecnologyIcons } from "@/utils/TecnologyIcons";
import SectionTitle from "../common/SectionTitle";
import SquareIcon from "../common/SquareIcon";

export default function AboutMe() {
  return (
    <section className="relative">
      <SectionTitle title="sobre mim" />

      <div className="flex gap-6 flex-wrap md:flex-nowrap md:gap-24 items-center">
        <span className="text-base text-gray-7 font-normal max-w-2xl">
          Sou um profissional dedicado e curioso pela área de desenvolvimento web,
          particularmente relacionado ao <span className="font-bold text-pb-dark">front end e UI/UX design</span>,
          com 3 anos de experiência nessa área e comprometido com a entrega.
          Tenho utilizado tecnologias como <span className="font-bold text-pb-dark">Javascript, HTML, CSS</span> e
          frameworks como <span className="font-bold text-pb-dark">Next Js, React JS e Vue JS </span>,
          sempre buscando evoluir minhas habilidades técnicas e interpessoais,
          através de constante estudo.
        </span>
        <aside className="flex gap-10 flex-wrap justify-center md:justify-end">
          {
            tecnologyIcons.map((item) => {
              return (<SquareIcon key={item.label} label={item.label} icon={item.icon}></SquareIcon>)
            })
          }
        </aside>
      </div>
    </section>)
}