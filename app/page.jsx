import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import SkillsVisualization from '@/components/SkillsVisualization';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsSection />
      <SkillsVisualization />
      <TestimonialsCarousel />
    </div>
  );
}
