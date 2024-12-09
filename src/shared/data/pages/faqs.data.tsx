import { text } from 'stream/consumers';
import { CallToActionProps, FAQsProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on FAQs page *******************
export const heroFaqs: HeroProps = {
  title: 'Frequently Asked Questions',
  subtitle: (
    <>
      <span className="hidden md:inline">
        {`Whether you need more details, or have additional questions, our FAQs are here to provide useful information.`}
      </span>{' '}
      If what you are looking for has not been answered, we are always here to answer your questions.
    </>
  ),
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};

// FAQS4 data on FAQs page *******************
export const faqs4Faqs: FAQsProps = {
  id: 'faqsFour-on-faqs',
  hasBackground: false,
  header: {
    title: 'Find what you need',
    subtitle: 'Get quick answers to your questions: Everything you need in one spot.',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'Process and Services',
        href: '/tab1',
      },
      items: [
        {
          title: 'What is your process for crafting custom marketing campaigns?',
          description: `Our process begins with a deep-dive session to thoroughly understand your business, your goals, and the challenges you face. We then brainstorm a variety of innovative ideas and approaches designed to resonate with your target audience. From there, you choose the direction that feels right, and we execute the campaign with precision and dedication, delivering measurable results that align with your vision.`,
        },
        {
          title: 'What industries or business types do you have the most experience with?',
          description: `We work best with service-oriented businesses and real estate agencies, where success hinges on targeting precise demographics rather than broad, untargeted campaigns. We identify and connect with niche audiences who are most likely to benefit from what you offer.  This focused strategy ensures that your marketing efforts are impactful, driving measurable results and meaningful engagement.`,
        },
        {
          title: 'Do you offer market research as part of your service?',
          description: `Absolutely, we include market research in every service we offer, as understanding your market is crucial to creating impactful campaigns. From identifying your unique competitive advantages to analyzing customer preferences, we ensure no detail is overlooked. With this foundation, we craft campaigns that not only meet your goals but also position your business as a leader in your field.`,
        },
        {
          title: 'What methods do you use to identify my target audience?',
          description: `Identifying your target audience involves a multi-step process that combines competitive analysis, market trends, and data-driven insights. We couple this with thorough market research to identify trends and customer behavior patterns, ensuring that your audience is both targeted and receptive. Even during a campaign, we don’t settle for static strategies; we make adjustments based on results to ensure your audience remains relevant and your campaign stays effective.`,
        },
        {
          title: 'How do you measure the effectiveness of your campaigns?',
          description: `Effectiveness is measured by setting a roadmap that includes specific goals and clear KPIs. Whether it is boosting website traffic, generating leads, or increasing monthly revenue, every metric is aligned with your desired outcomes. Throughout the campaign, we track these factors closely, ensuring that progress is measurable and success is defined by the impact on your bottom line.`,
        },
        {
          title: 'Can you manage multiple marketing campaigns for my business at the same time?',
          description: `Yes, we can manage multiple campaigns for your business simultaneously, with a focus on maintaining quality and effectiveness. Our capacity allows us to handle up to three campaigns per client, ensuring each campaign receives the attention and strategy it deserves. This balance ensures we deliver high-performing results without compromising on precision or creativity.`,
        },
        {
          title: 'How involved will I be in developing and implementing the marketing campaigns?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'Prices and payments',
        href: '/tab2',
      },
      items: [
        {
          title: 'Do you offer custom pricing based on the scope of the campaign?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'Do you charge a flat rate or work on a retainer basis?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: 'Are there any introductory offers or discounts for new clients?',
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: 'Are flexible payment options or installment plans available?',
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'What is included in your pricing, and are there any additional costs?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'What is your policy for refunds or cancellations?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
        {
          title: 'Can I scale the scope of my campaigns mid-project, and how does it affect pricing?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'General',
        href: '/tab3',
      },
      items: [
        {
          title: 'What sets your marketing services apart from other providers?',
          description: `In ullamcorper pellentesque ante, nec commodo ex euismod viverra. Phasellus facilisis, justo a bibendum pellentesque, nibh est egestas lectus, volutpat ullamcorper arcu ante ac dolor.`,
        },
        {
          title: 'How do you stay up-to-date with the latest marketing trends?',
          description: `Pellentesque semper euismod malesuada. Curabitur quis lectus tortor. Aliquam efficitur pretium tellus, ut sagittis turpis dignissim eget. Etiam scelerisque nec risus eget iaculis. Nunc maximus metus id felis dapibus, sed ullamcorper sapien faucibus.`,
        },
        {
          title: 'Do you have any client testimonials or case studies available to review?',
          description: `Sed sagittis arcu suscipit auctor suscipit. Nam dapibus risus vitae tristique fermentum. In egestas turpis elit, id gravida diam dictum eu. Ut dictum libero ut rhoncus egestas. Ut sit amet tortor blandit, faucibus tellus vitae, consequat purus. Nullam id odio enim.`,
        },
        {
          title: 'What is your approach to building long-term client relationships?',
          description: `Fusce efficitur, augue et vulputate pharetra, augue turpis viverra turpis, id tempor purus eros sed erat. Curabitur blandit eget sem vitae malesuada.`,
        },
        {
          title: 'Can I schedule a consultation to discuss my specific business needs?',
          description: '',
        },
        {
          title: 'How many clients do you typically work with at one time, and why?',
          description: '',
        },
      ],
    },
  ],
};

// CallToAction data on FAQs page *******************
export const callToActionFaqs: CallToActionProps = {
  id: 'callToAction-on-faqs',
  hasBackground: true,
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
