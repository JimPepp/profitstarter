import type { Metadata } from 'next';

import CallToAction2 from '~/components/widgets/CallToAction2';
import FAQs4 from '~/components/widgets/FAQs4';
import { heroFaqs, faqs4Faqs } from '~/shared/data/pages/faqs.data';
import { callToAction2Home } from '~/shared/data/pages/home.data';
import Hero from '~/components/widgets/Hero';

export const metadata: Metadata = {
  title: 'FAQs',
};

const Page = () => {
  return (
    <>
      <Hero {...heroFaqs} />
      <FAQs4 {...faqs4Faqs} />
      <CallToAction2 {...callToAction2Home} />
    </>
  );
};

export default Page;
