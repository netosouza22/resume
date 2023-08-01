import Header from '@/components/Header';
import TitleSection from '@/components/TitleSection';


export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-white font-poppins">
      <div className="m-auto max-w-6xl">
        <Header />
        <TitleSection />
      </div>
    </main>
  )
}
