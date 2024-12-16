import {
  IconBrandLinkedin,
  IconBrandX,
  IconChevronDown,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 14 using the new App Router »',
    href: 'https://nextjs.org/blog/next-14',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=jamespeppas',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Menu',
      icon: IconChevronDown,
      links: [
        // {
        //   label: 'Services',
        //   href: '/services',
        // },
        // {
        //   label: 'Pricing',
        //   href: '/pricing',
        // },
        {
          label: 'About us',
          href: '/about',
        },
        {
          label: 'Contact us',
          href: '/contact',
        },
        {
          label: 'FAQs',
          href: '/faqs',
        },
        // {
        //   label: 'Terms & Conditions',
        //   href: '/terms',
        // },
        // {
        //   label: 'Privacy Policy',
        //   href: '/privacy',
        // },
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    // {
    //   label: 'Contact',
    //   href: '/contact',
    // },
  ],
  actions: [
    {
      text: 'Contact',
      href: '/contact',
      targetBlank: true,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandX, href: '#' },
    { label: 'Facebook', icon: IconBrandLinkedin, href: '#' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(/favicon.ico)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Made by{' '}
        <a
          className="font-semibold text-slate-900 hover:text-blue-600 hover:underline"
          href="https://onwidget.com/"
        >
          {' '}
          onWidget
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Location',
      texts: ['Piraeus - Athens', 'Attica, Greece'],
    },
    {
      title: 'Phone',
      texts: ['(+30) 694 353 1213'],
    },
    {
      title: 'Email',
      texts: ['Info: info@profitstarter.net', 'Site: https://profitstarter.net'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandX, href: '#' },
    { label: 'Facebook', icon: IconBrandLinkedin, href: '#' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(/favicon.ico)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Made by{' '}
        <a
          className="font-bold font-Playfair uppercase text-lg text-text-50"
          href="https://onwidget.com/"
        >
          {' '}
          Profit Starter
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};
