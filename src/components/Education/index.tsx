import cvResume from '@/utils/cv.json';
import SectionTitle from "../common/SectionTitle";
import BookOpenSvgComponent from '../common/icons/BookOpenSvgComponent';
import WorldSvgComponent from "../common/icons/WorldSvgComponent";

import { PiGraduationCap } from 'react-icons/pi';

export default function Education() {
  return (
    <section className="w-full bg-pb-dark py-[3.75rem] px-4 lg:px-0">
      <div className="m-auto max-w-6xl">

        <SectionTitle title="Formação" colorStyle="light" />

        <main className='flex flex-col justify-between lg:flex-row'>
          <div className="flex flex-col gap-6 lg:min-w-[31.375rem]">
            <div className="space-y-4">
              <header className="text-white flex items-center gap-[0.625rem] font-light">
                <PiGraduationCap color="" className="text-gray-light font-normal" size={28} font="regular" />
                <span className="text-base text-gray-1 font-bold">Graduação</span>
              </header>

              <div className=" flex flex-col gap-2 text-gray-11 bg-pb-light py-4 px-[0.875rem] rounded">
                <header className='flex justify-between'>
                  <span className='text-[0.875rem]'>Bacharel / UFC</span>
                  <span className='text-xs text-gray-9'>Concluindo</span>
                </header>

                <h3 className='relative text-2xl text-gray-10 font-bold z-10 
                  before:absolute before:w-2 before:h-[1.3125rem] before:rounded 
                  before:bg-white before:z-50 before:top-[0.375rem] before:-left-[17px] '>
                  Engenharia da Computação
                </h3>

                <div className='flex items-center justify-center text-xs gap-[1.375rem]'>
                  <span className='text-gray-dark'>Atuações</span>
                  <ul className='text-gray-8 text-xs'>
                    <li>Assessor de Financeiro - Centro Acadêmico</li>
                    <li>Diretor  financeiro -  Centro Acadêmico</li>
                    <li>Desenvolvedor - Loading Desenvolvimento Jr</li>
                    <li>Vice-Presidente  - Loading Desenvolvimento Jr</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="space-y-4">
              <header className="text-gray-light flex items-center gap-[0.625rem]">
                <WorldSvgComponent className="text-gray-light" />
                <span className="text-base text-gray-1 font-bold">Linguagens</span>
              </header>

              <div className="flex items-center justify-between gap-2 text-gray-11 bg-pb-light py-4 px-[0.875rem] rounded">

                <span className="relative text-sm text-gray-10 font-bold z-10 
                  before:absolute before:w-2 before:h-5 before:rounded 
                  before:bg-white before:z-50 before:-left-[1.0625rem] '>">Inglês</span>
                <span className="text-xs text-gray-9">Intermediário</span>
              </div>
            </div>
            <div>
            </div>
          </div>

          <div className="hidden flex-col items-center justify-center gap-24 lg:flex">
            <div className="w-1 h-2 bg-pb-light rounded"></div>
            <div className="w-1 h-2 bg-pb-light rounded"></div>
            <div className="w-1 h-2 bg-pb-light rounded"></div>
          </div>

          <div className='space-y-4'>
            <header className="text-white flex items-center gap-[10px] font-light">
              <BookOpenSvgComponent />
              <span className="text-base text-gray-1 font-bold">Cursos</span>
            </header>

            {cvResume.courses.map((course) => {
              return (
                <div className='flex flex-col gap-2 text-gray-11 bg-pb-light py-4 px-[0.875rem] rounded'>
                  <header className='flex justify-between text-xs font-medium'>
                    <span className='uppercase'>{course.company}</span>
                    <span className='text-gray-9'>{course.duration}</span>
                  </header>
                  <main className='space-y-1'>
                    <h3 className='relative text-base text-gray-10 font-bold z-10 
                      before:absolute before:w-2 before:h-5 before:rounded 
                    before:bg-white before:z-50 before:top-1 before:-left-[17px]'>
                      {course.title}
                    </h3>
                    <p className='text-xs font-normal'>{course.description}</p>
                  </main>
                </div>
              )
            })
            }
          </div>
        </main>

      </div>
    </section>
  )
}