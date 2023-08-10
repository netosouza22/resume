import { BsGithub } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import { IoLogoWhatsapp } from 'react-icons/io';

import SectionTitle from "../common/SectionTitle";


export default function ContactMe() {
  return (
    <section id="contact-me" className="w-full bg-pb-darker pt-[3.75rem] px-4 lg:px-0">
      <div className="m-auto max-w-6xl">

        <SectionTitle title="Contato" colorStyle="light" />

        <div className="flex flex-col gap-10  text-gray-light text-2xl font-bold 
            mt-8 mb-[3.75rem] md:flex-row md:justify-between md:items-center">
          <p className="md:max-w-[500px]">
            Estou disponível para novos projetos.
            Entre em contato comigo e vamos <br />
            ter uma conversa.
          </p>

          <div className='space-y-5 md:space-y-[2.125rem]'>
            <ul className="flex gap-8">
              <li className="hover:text-pb"><a href="https://www.linkedin.com/in/netosousa/" target="_blank"><GrLinkedin size={40} /></a></li>
              <li className="hover:text-pb"><a href="https://github.com/netosouza22" target="_blank"><BsGithub size={40} /></a></li>
              <li className="hover:text-pb"><a href="https://wa.me/88999455063" target="_blank"><IoLogoWhatsapp size={40} /></a></li>
            </ul>

            <div>
              <p className="leading-8 text-2xl">netosouzacp@gmail.com</p>
              <p className="leading-10 text-2xl">(88) 99945-5063</p>
            </div>
          </div>
        </div>

        <div className="text-gray-light text-[0.625rem]">Neto, alguns direito reservados</div>
      </div>
    </section>
  )
}