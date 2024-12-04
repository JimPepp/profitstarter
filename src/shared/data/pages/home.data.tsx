import {
  IconArrowDown,
  IconBrandLinkedin,
  IconBrandX,
  IconBulb,
  IconCircleCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconPalette,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
  IconSend,
  IconHandClick,
  IconPercentage30,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import gasImg from '~/assets/images/gas.jpg';
import { text } from 'stream/consumers';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Crafting <span className="hidden md:inline">Marketing</span> <span>Strategies</span>{' '}
      <span className="sm:whitespace-nowrap">For Leaders Like You</span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        Premium Solutions tailored to empower your business with <em>out-of-the-box strategies</em> and{' '}
        <em>innovative technologies</em>.
      </span>{' '}
      Built for businesses that{' '}
      <span className="font-semibold underline decoration-text-300 text-text-50/90 decoration-1 underline-offset-2">
        aim higher
      </span>
      .
    </>
  ),
  callToAction: {
    text: 'Get in touch',
    href: '/contact',
    icon: IconSend,
    targetBlank: true,
  },
  callToAction2: {
    text: 'Learn more',
    href: '/about',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap font-Playfair text-6xl uppercase">Profit Starter</span>
      </>
    ),
    subtitle: 'Made-to-measure solutions to market and automate your business.',
    tagline: 'Features',
  },
  items: [
    {
      title: 'Partner, Not Provider',
      description: 'Experience a hands-on partnership where your business goals become our shared mission.',
      icon: IconPercentage30,
      callToAction: {
        text: 'Discover now',
        href: '/contact',
      },
    },
    {
      title: 'Exclusivity',
      description:
        'We work with only three clients per quarter to guarantee undivided attention and unmatched results.',
      icon: IconComponents,
      callToAction: {
        text: 'Discover now',
        href: '/contact',
      },
    },
    {
      title: 'Creative and Comprehensive Marketing',
      description:
        'Unleashing innovative strategies across physical, digital, and traditional media — because true marketing knows no bounds.',
      icon: IconPalette,
      callToAction: {
        text: 'Discover now',
        href: '/contact',
      },
    },
    {
      title: 'Cutting-Edge AI and Automation Expertise',
      description: 'Custom-tailored solutions powered by advanced AI, automation, and a creative edge.',
      icon: IconRocket,
      callToAction: {
        text: 'Discover now',
        href: '/contact',
      },
    },
    {
      title: 'Transparency and Trust at the Core',
      description: 'No gatekeeping, no hidden fees — just open communication and complete transparency.',
      icon: IconBulb,
      callToAction: {
        text: 'Discover now',
        href: '/contact',
      },
    },
    {
      title: 'Results That Resonate',
      description:
        'Driving revenue growth, customer retention, and streamlined operations through tailored strategies.',
      icon: IconCircleCheck,
      callToAction: {
        text: 'Discover now',
        href: '/contact',
      },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Aliquip definiebas ad est',
    subtitle: 'Quando cetero his ne, eum admodum sapientem ut',
    tagline: 'Content',
  },
  content:
    'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
      description:
        'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
    },
    {
      title: 'Cu imperdiet posidonium sed',
      description:
        'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
      description:
        'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'Sed ac magna sit amet risus tristique interdum.',
  },
  items: [
    {
      title: 'Step 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
    },
  ],
  callToAction: {
    text: 'Get started',
    href: '/contact',
    icon: IconHandClick,
    targetBlank: true,
  },
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'Your success story could be here. Let’s start building it together!',
    subtitle:
      'As we launch our services, we’re offering exclusive introductory pricing to our first three clients in exchange for detailed feedback and testimonials. Take advantage of this limited opportunity to receive premium, tailored business solutions at a fraction of the cost while setting the foundation for a long-term partnership.',
  },
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    targetBlank: true,
  },
  isTestimonialUp: false,
  testimonials: [
    //   {
    //     name: 'Tayla Kirsten',
    //     job: 'Marketing Manager',
    //     testimonial: `I'm impressed by the speed and performance of these templates. My website now loads in the blink of an eye, significantly enhancing my visitors' experience. Thanks to TailNext, my online business is thriving.`,
    //     image: {
    //       src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    //       alt: 'Tayla Kirsten',
    //     },
    //     href: '/',
    //   },
    //   {
    //     name: 'Silver Jordan',
    //     job: 'Senior Marketer',
    //     testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
    //     image: {
    //       src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    //       alt: 'Silver Jordan',
    //     },
    //     href: '/',
    //   },
    //   {
    //     name: 'Kelsey Arden',
    //     job: 'Co-Founder & CEO',
    //     testimonial: `As a beginner in web development, I really needed clear guidance. Tailnext made it possible. I was able to install and customize my website seamlessly, and I'm thrilled with the results!`,
    //     image: {
    //       src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    //       alt: 'Kelsey Arden',
    //     },
    //     href: '/',
    //   },
    //   {
    //     name: 'Sarah Johnson',
    //     job: 'Business Owner',
    //     testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
    //     image: {
    //       src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    //       alt: 'Sarah Johnson',
    //     },
    //     href: '/',
    //   },
    //   {
    //     name: 'Keith Young',
    //     job: 'Freelance Developer',
    //     testimonial: `The clean code and integration with Next.js make my projects a breeze. Plus, the responsive design ensures that my clients' websites look amazing on any device. These templates have become my secret weapon for success!`,
    //     image: {
    //       src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    //       alt: 'Keith Young',
    //     },
    //     href: '/',
    //   },
    //   {
    //     name: 'Lisa Gordon',
    //     job: 'Project Manager',
    //     testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
    //     image: {
    //       src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    //       alt: 'Lisa Gordon',
    //     },
    //     href: '/',
    //   },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle: 'Still having thoughts about us? Here are the questions we get asked more frequently.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'How will your services help my business stand out in a crowded market?',
      description: `Our strategies are designed to help your business break through the noise by leveraging creativity, innovation, and cutting-edge technology. Whether it’s revitalizing your marketing approach or automating processes to free up your time, we ensure your business is positioned as a leader in its field. The result? A brand that captures attention, inspires trust, and drives sustainable growth.`,
    },
    {
      title: 'Can your solutions help me attract and retain more customers?',
      description: `Absolutely. We focus on understanding your audience and creating strategies that resonate with their needs and desires. From innovative marketing campaigns to streamlined customer experiences, our solutions are tailored to not only bring in new customers but also deepen loyalty among existing ones. Your business will become the go-to choice for your target market.`,
    },
    {
      title: 'How can you help me save time and focus on what I do best?',
      description: `We take the stress of managing complex tasks off your plate, allowing you to concentrate on leading and growing your business. By implementing smart automation and streamlined workflows, we eliminate inefficiencies and simplify your operations. You’ll gain valuable time to focus on your passion while feeling confident that the backend of your business is running smoothly.`,
    },
    {
      title: 'Will your services help me achieve measurable growth?',
      description: `Yes, our ultimate goal is to deliver measurable outcomes that matter to you. Whether it’s increasing revenue, scaling your operations, or enhancing customer engagement, we align our strategies with your vision of success. You’ll see clear, tangible progress that validates your investment and fuels your confidence in your business’s potential.`,
    },
    {
      title: 'How will I know your strategies are working for my business?',
      description: `We believe in transparency and measurable results. Throughout our collaboration, we’ll provide regular updates, actionable insights, and clear metrics that demonstrate the impact of our strategies. From increased sales to improved operational efficiency, you’ll have a clear picture of how our solutions are driving your business forward.`,
    },
    {
      title: 'What kind of transformation can I expect for my business?',
      description: `Imagine a business that feels effortless to run, attracts the right clients consistently, and operates at its peak potential. That’s the transformation we aim to deliver. By addressing your unique challenges and crafting strategies that align with your goals, we help you unlock the next level of growth and success while reducing stress and uncertainty.`,
    },
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Etiam in libero, et volutpat',
        },
        {
          description: 'Aenean ac nunc dolor tristique',
        },
        {
          description: 'Cras scelerisque accumsan lib',
        },
        {
          description: 'In hac habitasse',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Proin vel laoreet',
        },
        {
          description: 'Ut efficitur egestas',
        },
        {
          description: 'Pellentesque ut nibh',
        },
        {
          description: 'Donec fringilla sem',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Curabitur suscipit risus',
        },
        {
          description: 'Aliquam blandit malesuada',
        },
        {
          description: 'Suspendisse sit amet',
        },
        {
          description: 'Suspendisse auctor dui',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle: (
      <>
        I may be the face of{' '}
        <span className="font-Playfair font-bold text-2xl text-text-50 uppercase">Profit Starter</span>{' '}
        but I’m backed by cutting-edge technologies, and a network of collaborators to ensure every
        project’s success.
      </>
    ),
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'James Peppas',
      occupation: 'Founder',
      image: {
        src: 'https://pbs.twimg.com/profile_images/1774436774011363329/Dd4_CgGe_400x400.jpg',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandX,
          href: 'https://x.com/JamesPeppas',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/james-peppas-7b0b781a7/',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    // {
    //   name: 'Toby Foster',
    //   occupation: 'Marketing Tech',
    //   image: {
    //     src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
    //     alt: 'Toby Foster',
    //   },
    //   items: [
    //     {
    //       title: 'Know more on Twitter',
    //       icon: IconBrandX,
    //       href: '#',
    //     },
    //     {
    //       title: 'Know more on Linkedin',
    //       icon: IconBrandLinkedin,
    //       href: '#',
    //     },
    //     {
    //       title: 'Contact by email',
    //       icon: IconMail,
    //       href: '#',
    //     },
    //   ],
    // },
    // {
    //   name: 'Clark Bourne',
    //   occupation: 'Content Manager',
    //   image: {
    //     src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    //     alt: 'Clark Bourne',
    //   },
    //   items: [
    //     {
    //       title: 'Know more on Twitter',
    //       icon: IconBrandX,
    //       href: '#',
    //     },
    //     {
    //       title: 'Know more on Linkedin',
    //       icon: IconBrandLinkedin,
    //       href: '#',
    //     },
    //     {
    //       title: 'Contact by email',
    //       icon: IconMail,
    //       href: '#',
    //     },
    //   ],
    // },
    // {
    //   name: 'Bella Chase',
    //   occupation: 'UX Designer',
    //   image: {
    //     src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    //     alt: 'Bella Chase',
    //   },
    //   items: [
    //     {
    //       title: 'Know more on Twitter',
    //       icon: IconBrandX,
    //       href: '#',
    //     },
    //     {
    //       title: 'Know more on Linkedin',
    //       icon: IconBrandLinkedin,
    //       href: '#',
    //     },
    //     {
    //       title: 'Contact by email',
    //       icon: IconMail,
    //       href: '#',
    //     },
    //   ],
    // },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'In hac habitasse platea dictumst',
    tagline: 'Work with Us',
  },
  content:
    'We work with a select number of clients each quarter to ensure personalized service and exceptional results. We value your time and your trust. Share your vision, and we’ll respond with a personalized plan to help you achieve it.',
  items: [
    // {
    //   title: 'Our Address',
    //   description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
    //   icon: IconMapPin,
    // },
    // {
    //   title: 'Contact',
    //   description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
    //   icon: IconPhoneCall,
    // },
    // {
    //   title: 'Working hours',
    //   description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
    //   icon: IconClock,
    // },
  ],
  form: {
    title: 'Apply to collaborate',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Get Resources',
  subtitle:
    'Your one-stop hub for actionable business solutions. Insights and tools to drive your business success.',
  items: [
    {
      title: 'Get the case study',
      description: 'Discover how tailored strategies deliver real results.',
      href: '',
    },
    {
      title: 'Read the blog',
      description: 'Dive into proven strategies and innovative solutions on our blog.',
      href: '/blog',
    },
    {
      title: 'Subscribe',
      description: `Stay ahead with exclusive insights and updates. Zero spam, only value.`,
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
