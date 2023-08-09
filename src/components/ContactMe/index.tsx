import SectionTitle from "../common/SectionTitle";

export default function ContactMe() {
  return (
    <section className="w-full bg-pb-darker pt-[3.75rem] px-4 lg:px-0">
      <div className="m-auto max-w-6xl">

        <SectionTitle title="Contato" colorStyle="light" />

        <div className="flex justify-between text-gray-light text-2xl font-bold">
          <p className="max-w-[500px]">
            Estou disponível para novos projetos.
            Entre em contato comigo e vamos <br />
            ter uma conversa.
          </p>

          <div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>netosouzacp@gmail.com</p>
            <p>(88) 99945-5063</p>
          </div>
        </div>

        <span>Neto, alguns direito reservados</span>
      </div>
    </section>
  )
}