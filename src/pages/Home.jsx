import Header from '../components/Header';
import TrendingSection from '../components/TrendingSection';
import StoryFeed from '../components/StoryFeed';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white text-primary selection:bg-secondary-container min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <TrendingSection />
        <hr className="border-zinc-100 mb-16"/>
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex flex-col lg:flex-row gap-20">
          <StoryFeed />
          <RightSidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
