"use client";

import { useState, Fragment } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';

import { CustomFilterProps } from '../types';
import { updateSearchParams } from '../utils';

export default function CustomFilter<T>({
  options,
  setFilter,
}: CustomFilterProps<T>) {
  const [menu, setMenu] = useState(options[0]);


  return (
    <div className="w-fit">
      <Listbox value={menu} onChange={(e) => {
        setMenu(e);
        setFilter(e.value as unknown as T);
      }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{menu.title}</span>
            <Image src="/chevron-up-down.svg" width={20} height={20} className="ml-4 object-contain" alt="chevron up and down" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-10"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) => `relative cursor-default select-none px-4 py-2 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`}
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox >
    </div >
  );
}
