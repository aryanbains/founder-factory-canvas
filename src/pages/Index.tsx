
import { Hero } from "@/components/sections/hero";
import { Initiatives } from "@/components/sections/Initiatives";
import { Stats } from "@/components/sections/Stats";
import { EventsPreview } from "@/components/sections/EventsPreview";
import { Layout } from "@/components/layout/layout";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Initiatives />
      <Stats />
      <EventsPreview />
    </Layout>
  );
};

export default Index;
