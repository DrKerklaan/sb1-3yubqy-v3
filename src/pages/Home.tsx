import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import DoctorSection from '../components/DoctorSection';
import ProductGrid from '../components/ProductGrid';
import InfoSection from '../components/InfoSection';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ProductGrid />
      <div className="space-y-4">
        <DoctorSection />
        <InfoSection />
        <Newsletter />
      </div>
    </Layout>
  );
}