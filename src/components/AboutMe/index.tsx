import SectionTitle from "../common/SectionTitle";

export default function AboutMe() {
  return (
    <section className="relative">
      <SectionTitle title="sobre mim" />

      <div>
        <span className="text-base text-gray-7 font-normal">
          Sou um profissional dedicado e curioso pela área de desenvolvimento web,
          particularmente relacionado ao <span className="font-bold text-pb-dark">front end e UI/UX design</span>,
          com 3 anos de experiência nessa área e comprometido com a entrega.
          Tenho utilizado tecnologias como <span className="font-bold text-pb-dark">Javascript, HTML, CSS</span> e
          frameworks como <span className="font-bold text-pb-dark">Next Js, React JS e Vue JS </span>,
          sempre buscando evoluir minhas habilidades técnicas e interpessoais,
          através de constante estudo.
        </span>
        <aside>
          {/* {
            tecnologyIcons.map(() => {
              <h1>asdasd</h1>
            })
          } */}
        </aside>
      </div>
    </section>)
}