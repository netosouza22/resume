import AboutMe from '@/components/AboutMe';
import Header from '@/components/Header';
import TitleSection from '@/components/TitleSection';


export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-white text-gray-10 font-poppins">
      <div className="m-auto max-w-6xl px-4 md:px-12 lg:px-0">
        <Header />
        <TitleSection />
        <AboutMe />
      </div>
    </main>
  )
}
