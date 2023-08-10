
interface ISectionTitle {
  title: string;
  colorStyle?: "dark" | "light";
}

export default function SectionTitle({ title, colorStyle = 'dark' }: ISectionTitle) {
  return (
    <div className={colorStyle === "dark" ? `text-gray-10` : `text-gray-light`}>
      <h1 className="relative  font-bold capitalize z-10 text-[2.5rem]  rounded
        before:content-shape-mark before:absolute before:-z-20 before:-top-1 before:-left-5
        md:text-[4rem]
        md:before:-top-4 md:before:-left-5
        ">
        {title}
      </h1>
    </div>
  )
}