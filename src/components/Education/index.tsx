import { PiGraduationCap } from 'react-icons/pi';
import SectionTitle from "../common/SectionTitle";

export default function Education() {
  return (
    <section className="w-full bg-pb-dark">
      <div className="m-auto max-w-6xl">

        <SectionTitle title="Formação" colorStyle="light" />

        <main className='flex'>
          <div>
            <div>
              <header className="text-white flex justify-between">
                <PiGraduationCap /> <span>Graduação</span>
              </header>
              <div className="text-gray-11 bg-pb-light">
                <header className='flex justify-between'>
                  <span className='text-[0.875rem]'>Bacharel / UFC</span>
                  <span className='text-xs'>Concluindo</span>
                </header>

                <h3 className='text-2xl text-gray-10 font-bold '>Engenharia da Educação</h3>

                <div className='flex items-center text-xs'>
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

            <div>
            </div>
          </div>
          <div></div>
        </main>

      </div>
    </section>
  )
}