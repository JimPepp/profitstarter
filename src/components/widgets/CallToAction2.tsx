import { IconChevronRight } from '@tabler/icons-react';
import { CallToActionProps, Item } from '~/shared/types';

const Card = ({ title, description, href, form }: Item) => (
  <div className="card mb-6 px-5 py-4">
    <div className="flex items-center justify-between">
      <div className="w-full">
        <h3 className="mb-3 text-xl font-bold text-text-50">{title}</h3>
        <p className="text-text-50/80">{description}</p>
      </div>
      {href && (
        <div className="flex h-10 w-10 items-center justify-center">
          <IconChevronRight className="h-6 w-6 text-primary-600" />
        </div>
      )}
    </div>
    {form && (
      <div className="mt-2">
        <form className="rounded-md border border-gray-400 bg-white shadow-md">
          <div className="flex items-center">
            {form.icon && (
              <span className="rounded-bl-md rtl:rounded-bl-none rtl:rounded-br-md rounded-tl-md rtl:rounded-tl-none rtl:rounded-tr-md border-r-[1px] rtl:border-r-none rtl:border-l-[1px] border-gray-400 px-2 py-2">
                <form.icon className="h-6 w-6 text-accent-600" />
              </span>
            )}
            <input
              type={form.input.type}
              name={form.input.name}
              autoComplete={form.input.autocomplete}
              placeholder={form.input.placeholder}
              className="w-full py-2 px-4 bg-background-950"
            />
            <button
              type={form.btn.type}
              className="rounded-br-md rtl:rounded-br-none rtl:rounded-bl-md rounded-tr-md rtl:rounded-tr-none rtl:rounded-tl-md border-l-[1px] rtl:border-l-none rtl:border-r-[1px] px-4 py-2 btn-primary"
            >
              {form.btn.title}
            </button>
          </div>
        </form>
      </div>
    )}
  </div>
);

const CallToAction2 = ({ title, subtitle, items }: CallToActionProps) => (
  <section className="bg-accent-900 text-text-50" id="callToActionTwo">
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:pt-20">
      <div className="row-gap-10 grid gap-6 md:grid-cols-2">
        <div className="mx-auto md:my-auto md:ml-0 md:pb-6 md:pr-24">
          <h2 className="mb-3 flex justify-center text-6xl font-bold md:justify-start">{title}</h2>
          <p className="text-center text-xl text-text-50/80 md:text-left rtl:md:text-right">
            {subtitle}
          </p>
        </div>
        <div className="relative -mb-6">
          {items &&
            items.map(({ title, description, href, form }, index) => (
              <div key={`call-to-action-item-${index}`}>
                {href ? (
                  <a
                    href={href}
                    className="w-full sm:mb-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`item-cta-${index}`}
                  >
                    <Card title={title} description={description} href={href} form={form} />
                  </a>
                ) : (
                  <Card title={title} description={description} href={href} form={form} />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction2;
