import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs3 from '~/components/widgets/FAQs3';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  callToAction2Home,
  contactHome,
  faqs2Home,
  featuresHome,
  heroHome,
  stepsHome,
  teamHome,
  testimonialsHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      {/* <SocialProof {...socialProofHome} /> */}
      <Features {...featuresHome} />
      {/* <Content {...contentHomeOne} /> */}
      {/* <Content {...contentHomeTwo} /> */}
      <Steps {...stepsHome} />
      <Testimonials {...testimonialsHome} />
      <FAQs3 {...faqs2Home} />
      {/* <Pricing {...pricingHome} /> */}
      <Team {...teamHome} />
      <Contact {...contactHome} />
      <CallToAction2 {...callToAction2Home} />
    </>
  );
}
