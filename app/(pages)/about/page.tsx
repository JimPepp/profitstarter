import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';

import Features3 from '~/components/widgets/Features3';
import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import {
  contactAbout,
  featuresFourAbout,
  featuresFourAboutTwo,
  features3About,
  hero2About,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      {/* <Stats {...statsAbout} /> */}
      <Features4 {...featuresFourAbout} />
      <Features4 {...featuresFourAboutTwo} />
      {/* <Steps {...stepsAbout} /> */}
      <Features3 {...features3About} />
      {/* <Features {...featuresAbout} /> */}
      {/* <Team2 {...teamAbout} /> */}
      {/* <Testimonials2 {...testimonials2About} /> */}
      {/* <FAQs {...faqsAbout} /> */}
      <Contact {...contactAbout} />
    </>
  );
};

export default Page;
