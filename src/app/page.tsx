import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';
import Education from '@/components/Education';
import Header from '@/components/Header';
import TitleSection from '@/components/TitleSection';
import WorkExperience from '@/components/WorkExperience';


export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-white text-gray-10 font-poppins">
      <div>
        <div className="px-4 md:px-12 lg:px-4 xl:px-0">
          <Header />
          <TitleSection />
          <AboutMe />
          <WorkExperience />
        </div>
        <Education />
        <ContactMe />
      </div>
    </main>
  )
}
