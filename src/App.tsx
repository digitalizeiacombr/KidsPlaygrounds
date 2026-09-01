/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import HeroSection from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <StatsBar />
        <Services />
        <TargetAudience />
        <Gallery />
        <FAQ />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
