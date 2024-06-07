'use client';
import { FunctionComponent, useState } from 'react';
import { IAccordionProps } from '.';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

export const Accordion: FunctionComponent<IAccordionProps> = ({ accordion }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {accordion.map((item, index) => (
        <div
          key={index}
          className="relative mb-2 rounded-md border bg-white md:dark:border-none md:dark:bg-[#15141b] md:dark:shadow-xl"
        >
          <div
            className="flex cursor-pointer items-center px-4 py-3 transition-all ease-in"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-base text-slate-700 md:dark:text-white md:dark:hover:text-[#FFFFFF]">
              {item.title}
            </h3>
            <span className="absolute right-0 mr-4">
              {activeIndex === index ? (
                <MdExpandLess size={23} className="text-gray-700" />
              ) : (
                <MdExpandMore size={23} className="text-gray-700" />
              )}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'h-auto max-h-[1000px]' : 'h-0 max-h-0'
            }`}
          >
            <div className="p-4 text-sm leading-normal text-[#294d7c] md:dark:text-[#FFFFFF]">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
