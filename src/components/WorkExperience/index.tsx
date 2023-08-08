import cvResume from '@/utils/cv.json';
import SectionTitle from "../common/SectionTitle";
import WorkExperienceCard from "../common/WorkExperienceCard";

export default function WorkExperience() {
  return (
    <section className="m-auto max-w-6xl flex flex-col gap-[1.875rem] md:gap-[3.75rem]">
      <SectionTitle title="Experiência" />

      <div>
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