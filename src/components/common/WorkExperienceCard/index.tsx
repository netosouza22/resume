import { classTranslate } from "@/utils/TailwindVarHelper";
import { useEffect, useRef, useState } from "react";

interface IWorkExperience {
  workExperienceData: {
    role: string;
    company: string;
    dates: {
      start: string,
      end: string,
    };
    activities: string[];
    tags: string[];
  }

}

export default function WorkExperienceCard({ workExperienceData: { activities, company, dates, role, tags } }: IWorkExperience) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const ref = useRef(null);

  useEffect(() => {
    const Observer: any = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    })

    Observer.observe(ref.current);
    return () => Observer.disconnect;
  }, [])

  return (
    <div ref={ref} className={`flex items-center gap-16 `}>
      <div className={`hidden relative min-w-[90px] h-[90px] bg-pb-dark rounded-full shadow-sm
          md:flex flex-col justify-center items-center z-10 text-gray-light text-[10px] font-bold
          before:absolute before:w-[9px] before:h-[130px] before:rounded-[4px] before:bg-pb-dark 
          before:-top-[22%] before:left-[45.5%] before:-z-20 
          ${!isIntersecting
          ? '-translate-x-[150%] opacity-0'
          : classTranslate.toLeft} duration-500
          `}>
        <span>{dates.start}</span>
        -
        <span>{dates.end}</span>
      </div>

      <div className={`w-full relative bg-gray-light rounded-md py-5 px-4 
        before:absolute before:w-2 before:h-5 before:bg-pb-dark
        before:-left-1 before:top-6 before:rounded-md
        ${!isIntersecting
          ? '-translate-x-[150%] opacity-0'
          : classTranslate.toLeft} duration-700
      `}>

        <header className="flex items-center text-gray-10 text-lg font-bold space-x-5">
          <span className="text-gray-9">
            {role}
          </span>
          <span className="bg-gray-3 w-[0.875rem] h-1 rounded-[0.25rem] m-auto"> </span>
          <span className="text-xs uppercase text-gray-8">
            {company}
          </span>
        </header>

        <main className="flex flex-wrap gap-8 justify-between items-center md:gap-16 md:flex-nowrap md:p-2">
          <div className="text-gray-7 text-xs font-normal leading-5">
            <ul>
              {
                activities.map((item) => {
                  return (
                    <li key={item} className="list-disc">{item}</li>
                  )
                })
              }
            </ul>
          </div>

          <aside className="flex flex-wrap text-[0.75rem] text-pb-dark md:max-w-[200px]">
            {
              tags.map((tag) => {
                return (
                  <span key={tag} className="px-2 py-1 m-1 bg-white rounded-md shadow-sm">{tag}</span>
                )
              })
            }
          </aside>
        </main>


      </div>
    </div>
  )
}