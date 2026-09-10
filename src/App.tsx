import Hero from '@/components/Hero';
import Medallion from '@/components/Medallion';
import NextSection from '@/components/NextSection';

export default function App() {
  return (
    <div className="relative w-full">
      <Hero />
      <NextSection />
      {/* Circular calligraphy medallion straddling the boundary between hero and next section */}
      <div className="absolute left-1/2 top-[100vh] -translate-x-1/2 -translate-y-1/2 z-50">
        <Medallion />
      </div>
    </div>
  );
}
