'use client';

import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import useCollapse from '~/hooks/useCollapse';
import { CollapseProps } from '~/shared/types';

const Collapse = ({ items, classCollapseItem, iconUp, iconDown }: CollapseProps) => {
  const { activeIndex, handleSetIndex } = useCollapse();

  return (
    <>
      {items.map(({ title, description }, index) => (
        <div
          key={`accordion-${index}`}
          onClick={() => handleSetIndex(index)}
          className="mx-auto max-w-3xl select-none bg-transparent text-base"
        >
          <div className={classCollapseItem}>
            <div
              className="align-center flex justify-between"
              id={`accordion__heading-${index}`}
              aria-disabled="false"
              aria-expanded="false"
              aria-controls={`accordion__panel-${index}`}
              role="button"
            >
              <h2 className="w-full pr-2 text-lg font-medium leading-6 text-text-50">{title}</h2>
              {iconDown && iconUp ? (
                activeIndex === index ? (
                  iconUp
                ) : (
                  iconDown
                )
              ) : activeIndex === index ? (
                <IconChevronUp className="h-6 w-6 text-accent-600" />
              ) : (
                <IconChevronDown className="h-6 w-6 text-accent-600" />
              )}
            </div>
            {activeIndex === index && (
              <div
                className="mt-3 select-none"
                aria-labelledby={`accordion__heading-${index}`}
                id={`accordion__panel-${index}`}
              >
                <p className="mt-2 text-text-50/80">{description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Collapse;
