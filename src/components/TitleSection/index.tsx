import MarkSvgComponent from "../MarkSvgComponent";

export default function TitleSection() {
  return (
    <section className="px-24 flex h-16">
      <div className="m h-40 bg-pb-light"> adad asd ad asd</div>

      <div className="relative">
        <span className="z-0 absolute -top-6 -left-12">
          <MarkSvgComponent />
        </span>

        <div className="absolute  space-y-4">
          <h1 className=" text-gray-dark text-main-title font-bold z-10 leading-70">
            Desenvolvedor <br /> Front End
          </h1>
          <p className=" text-gray-8 text-base">
            Meu nome é <span className="font-bold"> Antônio Assis de Sousa Neto </span>
            , <br />
            Localizado no Ceará
          </p>
        </div>
      </div>
    </section >
  )
}