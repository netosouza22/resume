"use client"

import cvResume from '@/utils/cv.json';
import SectionTitle from "../common/SectionTitle";
import WorkExperienceCard from "../common/WorkExperienceCard";

export default function WorkExperience() {



  return (
    <section id="work-experience" className="m-auto max-w-6xl  my-[1.875rem] flex flex-col gap-[1.25rem] md:my-[3.75rem] md:gap-[2.5rem]">
      <SectionTitle title="Experiência" />

      <div className={`flex flex-col gap-4 md:gap-5       
`}>
        {
          cvResume["work-experience"].map((workExperience, index) => {

            if (index < 3) {
              return (
                <WorkExperienceCard workExperienceData={workExperience} />
              )
            }
          })
        }
      </div>
    </section>
  )
}