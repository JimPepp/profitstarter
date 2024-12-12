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
          description: `Identifying your target audience involves a multi-step process that combines competitive analysis, market trends, and data-driven insights. We couple this with thorough market research to identify trends and customer behavior patterns, ensuring that your audience is both targeted and receptive. Even during a campaign, we do not settle for static strategies; we make adjustments based on results to ensure your audience remains relevant and your campaign stays effective.`,
        },
        {
          title: 'How do you measure the effectiveness of your campaigns?',
          description: `Effectiveness is measured by setting a roadmap that includes specific goals and clear KPIs. Whether it is boosting website traffic, generating leads, or increasing monthly revenue, every metric is aligned with your desired outcomes. Throughout the campaign, we track these factors closely, ensuring that progress is measurable and success is defined by the impact on your bottom line.`,
        },
        {
          title: 'Can you manage multiple marketing campaigns for my business at the same time?',
          description: `Yes, we can manage multiple marketing campaigns simultaneously, designing them to meet the needs of your business. Each campaign is strategically crafted and monitored to ensure maximum impact and alignment with your goals. We adapt our strategies to achieve consistent, measurable growth while we are always aligned with your business goals.`,
        },
        {
          title: 'How involved will I be in developing and implementing the marketing campaigns?',
          description: `Our process is designed to keep you actively involved without overwhelming your time. We start by drawing inspiration from your insights and vision, ensuring the campaign is deeply aligned with your business objectives. From there, we present you with tailored strategies to choose from, keeping you engaged and in control. As we implement, you will receive regular updates with performance metrics and insights into the campaign’s progress. Additionally, we stay agile by identifying scaling opportunities and emerging trends, ensuring your campaign remains cutting-edge. Simply put, you provide the vision, and we deliver the results.`,
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
          description: `Yes, our pricing is fully tailored to meet the specific needs of your campaign. We take into account various factors, including the scope of the campaign, the platforms used for advertising—whether digital or traditional—and the desired duration of the project. This approach ensures you only pay for the services that align with your goals, providing maximum value for your investment.`,
        },
        {
          title: 'Do you charge a flat rate or work on a retainer basis?',
          description: `We offer both flat-rate and retainer-based pricing models to suit your needs. Whether you require a one-time campaign or ongoing marketing support, we will collaborate to determine the structure that works best for your goals. Our customized pricing ensures you receive maximum value, and as your needs grow, we will adjust our approach to help you save while scaling your efforts effectively.`,
        },
        {
          title: 'Are there any introductory offers or discounts for new clients?',
          description: `Yes, we are excited to offer an exclusive introductory rate for our earliest clients as a token of appreciation for trusting us. This limited-time offer provides our service at a reduced rate in exchange for honest testimonials about your experience. This is our way of building relationships while showcasing the results we deliver to future clients.`,
        },
        {
          title: 'Are flexible payment options or installment plans available?',
          description: `We understand that every business operates differently, which is why we offer flexible payment options tailored to your needs. From single-payment arrangements to monthly installments or percentage-based models, we will collaborate to find a solution that works best for you. This adaptability ensures that your marketing goals align with your financial planning.`,
        },
        {
          title: 'What is included in your pricing, and are there any additional costs?',
          description: `Our pricing is fully transparent and tailored to the customized solution we create for your business. From the very beginning, you will receive a detailed breakdown of what is included, ensuring there are no surprises along the way. We pride ourselves on providing clear, straightforward pricing with no hidden fees or additional charges.`,
        },
        {
          title: 'What is your policy for refunds or cancellations?',
          description: `Your ability to make decisions freely is important to us, which is why we offer hassle-free cancellations at any time. Refunds are considered on a case-by-case basis, depending on the specific terms of your campaign agreement. We aim to maintain fairness and transparency throughout the process.`,
        },
        {
          title: 'Can I scale the scope of my campaigns mid-project, and how does it affect pricing?',
          description: `Yes, you can absolutely scale the scope of your campaigns mid-project to adapt to evolving goals. Pricing adjustments will reflect the new campaign scale, with changes taking effect from the next payment term. To accommodate immediate changes, a one-time fee will be applied for the current term, allowing your expanded vision to take shape without delay.`,
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
          description: `What sets us apart is our unwavering commitment to innovation and creativity. We approach each campaign with an out-of-the-box perspective, blending the latest AI-powered data analysis tools with a deep understanding of your unique business needs. This allows us to adapt swiftly to ever-changing trends, ensuring your marketing strategy stays ahead of the curve.`,
        },
        {
          title: 'How do you stay up-to-date with the latest marketing trends?',
          description: `Staying ahead in marketing requires continuous learning, and we make it a priority to research industry trends daily. By engaging with our network of collaborators and clients, we exchange ideas and gain insights that refine our strategies. We also embrace a hands-on approach, experimenting with new tools and technologies to ensure your campaigns remain cutting-edge.`,
        },
        {
          title: 'Do you have any client testimonials or case studies available to review?',
          description: `Although our journey is just beginning, we are committed to earning your trust by delivering measurable results. To give you a glimpse of what we bring to the table, we have prepared a sample case study that highlights the results we can achieve. We look forward to making your success the cornerstone of our future testimonials.`,
        },
        {
          title: 'What is your approach to building long-term client relationships?',
          description: `Our approach to long-term client relationships is built on a foundation of trust and results. We believe in being completely open about every aspect of our partnership, from campaign progress to challenges and opportunities. By making your success our top priority, we strive to be not just a service provider but a trusted partner in your growth journey.`,
        },
        {
          title: 'Can I schedule a consultation to discuss my specific business needs?',
          description: 'Yes, we would love to discuss your specific business needs! Scheduling a consultation is simple, and it is the first step in understanding your unique goals and challenges. We are here to explore opportunities, answer your questions, and map out a path to success tailored specifically to your business. You can contact us through the button at the top of the page.',
        },
        {
          title: 'How many clients do you typically work with at one time, and why?',
          description: 'To maintain our high standards and provide exceptional service, we limit the number of clients we work with simultaneously. This ensures that each client benefits from our focused expertise and dedicated partnership. Our approach allows us to dive deep into your needs and deliver results that exceed expectations.',
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
