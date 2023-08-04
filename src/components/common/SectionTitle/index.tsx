
interface ISectionTitle {
  title: string;
}

export default function SectionTitle({ title }: ISectionTitle) {
  return (
    <div className="">
      <h1 className="relative text-gray-10 font-bold capitalize z-20 text-[3rem]  rounded
        before:content-shape-mark before:absolute before:-z-20 before:-top-1 before:-left-5
        md:text-[4rem]
        md:before:-top-4 md:before:-left-5
        ">
        {title}
      </h1>
    </div>
  )
}