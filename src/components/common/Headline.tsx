import { HeadlineProps } from '~/shared/types';
import { twMerge } from 'tailwind-merge';

const Headline = ({ header, containerClass, titleClass, subtitleClass }: HeadlineProps) => {
  const { title, subtitle, tagline, position } = header;

  return (
    <div className="mb-4">
      {(title || subtitle || tagline) && (
        <div
          className={twMerge(
            `mb-6 mx-auto md:mb-12 ${
              position === 'left' ? 'text-left ml-0' : position === 'right' ? 'text-right mr-0' : 'text-center'
            }`,
            containerClass,
          )}
        >
          {tagline && (
            <p className="text-base font-semibold uppercase tracking-wide text-accent-600">
              {tagline}
            </p>
          )}
          {title && <h2 className={twMerge(`font-heading mb-4 font-bold tracking-tight text-text-50`, titleClass)}>{title}</h2>}
          {subtitle && (
            <p
              className={twMerge(
                `mx-auto mt-4 max-w-3xl text-xl text-text-50/80 dark:text-slate-400 ${
                  position === 'left' ? 'text-left ml-0' : position === 'right' ? 'text-right mr-0' : 'text-center'
                }`,
                subtitleClass,
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Headline;
