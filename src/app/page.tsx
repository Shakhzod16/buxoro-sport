import HeroBanner from "@/components/home/HeroBanner";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";
import ChampionAthletes from "@/components/home/ChampionAthletes";
import LatestNews from "@/components/home/LatestNews";
import QuickServices from "@/components/home/QuickServices";
import RegionsMap from "@/components/home/RegionsMap";
import StatisticsBar from "@/components/home/StatisticsBar";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <StatisticsBar />
      <QuickServices />
      <LatestNews />
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 48px' }}>
        <AnnouncementsSection />
      </section>
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 48px' }}>
        <ChampionAthletes />
      </section>
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 64px' }}>
        <RegionsMap />
      </section>
    </>
  );
}
