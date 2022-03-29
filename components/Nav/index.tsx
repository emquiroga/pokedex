import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { NAVIGATION_ITEMS, POKEMON_GENERATIONS } from "../../constants/constants";

import styles from "./index.module.css";

export const Nav = () => {
  return (
    <nav className="py-4 px-6 text-sm font-medium">
      <ul className="flex justify-end space-x-3">
        {NAVIGATION_ITEMS.map(({ url, name }, index) => {
          return (
            <li key={index}>
              <Link href={url}>
                <a className={`block px-3 py-2 rounded-md bg-slate-50`}>{name}</a>
              </Link>
            </li>
          );
        })}
        <Menu as="li" className="relative inline-block text-center">
          <ul>
            <Menu.Button className={`block px-3 py-2 rounded-md bg-slate-50`}>
              Generations
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                <div className={`py-4 gap-1 ${styles["generations-wrapper"]}`}>
                  {POKEMON_GENERATIONS.map((generation) => (
                    <Menu.Item key={generation}>
                      <li>
                        <Link href={`/generation/${generation}`}>
                          <a className={`block px-3 py-2 rounded-md bg-slate-50`}>
                            Generation {generation}
                          </a>
                        </Link>
                      </li>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </ul>
        </Menu>
      </ul>
    </nav>
  );
};
