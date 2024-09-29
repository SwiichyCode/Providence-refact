import { Fragment } from 'react';
import { HeroSection } from '@/app/providence/_components/hero-section';
import { FeaturesSection } from '@/app/providence/_components/features-section';

export default function ProvidencePage() {
  return (
    <Fragment>
      <HeroSection />
      <FeaturesSection />
    </Fragment>
  );
}
