
interface ISectionTitle {
  title: string;
}

export default function SectionTitle({ title }: ISectionTitle) {
  return (
    <div className="">
      <h1 className="relative text-gray-10 font-bold capitalize z-20 text-[4rem]  
        before:content-shape-mark before:absolute before:-z-20 before:-top-4 before:-left-5">
        {title}
      </h1>
    </div>
  )
}