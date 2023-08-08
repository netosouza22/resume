
export default function TitleSection() {
  return (
    <section className="flex align-middle content-between justify-center space-x-5 my-12 
      
      md:space-x-20 
      md:my-24 
      lg:px-24
      ">
      <div className="hidden h-80 w-96 bg-pb-light md:flex"> adad asd ad asd</div>

      <div className="h-auto w-96 flex md:items-center m-auto">
        <div className="space-y-4">
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
            Localizado no Ceará
          </p>
        </div>
      </div>
    </section >
  )
}