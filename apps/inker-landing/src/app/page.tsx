import { ArtistsSection } from '../components/ArtistsSection/ArtistsSection';
import { CollectorsSection } from '../components/CollectorsSection/CollectorsSection';
import { CommunitySection } from '../components/CommunitySection/CommunitySection';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { PlatformSection } from '../components/PlatformSection/PlatformSection';
import { ProblemSection } from '../components/ProblemSection/ProblemSection';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <PlatformSection />
        <ArtistsSection />
        <CollectorsSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}
