import { twMerge } from 'tailwind-merge';
import { Timeline as TimelineType } from '~/shared/types';

const Timeline = ({
  id,
  items,
  defaultIcon: DefaultIcon,
  containerClass,
  panelClass,
  iconClass,
  titleClass,
  descriptionClass,
}: TimelineType) => {
  return (
    <>
      {items && items.length && (
        <div className={twMerge('', containerClass)}>
          {items.map(({ title, description, icon: Icon }, index = 0) => (
            <div key={id ? `item-${id}-${index}` : `item-grid-${index}`} className={twMerge('flex', panelClass)}>
              <div className="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4">
                <div
                  className={`flex items-center justify-center border-primary-200 border-2 rounded-full ${
                    index !== items.length - 1 ? '' : 'text-primary-50  bg-primary-900'
                  }`}
                >
                  {Icon ? (
                    <Icon className={twMerge('w-10 h-10 p-2 rounded-full border-inherit', iconClass)} />
                  ) : DefaultIcon ? (
                    <DefaultIcon className={twMerge('w-10 h-10 p-2 rounded-full border-inherit', iconClass)} />
                  ) : null}
                </div>

                {index !== items.length - 1 && <div className="w-[2px] h-full bg-primary-200 dark:bg-slate-400/50" />}
              </div>
              <div className={`pt-1 ${index !== items.length - 1 ? 'pb-8' : ''}`}>
                {title && (
                  <h3 className={twMerge('text-xl font-bold text-primary-50 dark:text-slate-300 mb-2', titleClass)}>
                    {title}
                  </h3>
                )}
                {description && (
                  <p className={twMerge('text-primary-200 dark:text-slate-400', descriptionClass)}>{description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Timeline;
