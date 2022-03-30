import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { NAVIGATION_ITEMS, POKEMON_GENERATIONS } from "../../constants/constants";

export const Nav = () => {
  return (
    <nav className="w-full py-4 bg-lightBlue text-sm font-medium">
      <ul className="flex justify-end space-x-3">
        {NAVIGATION_ITEMS.map(({ url, name }, index) => {
          return (
            <li key={index}>
              <Link href={url}>
                <a
                  className={`text-white font-secondary text-small font-bold block py-2 px-4 rounded-md bg-darkRed`}
                >
                  {name}
                </a>
              </Link>
            </li>
          );
        })}
        <li>
          <Menu as="a" className="block mr-2 ">
            <Menu.Button
              className={`text-white font-secondary text-small font-bold block py-2 px-4 rounded-md bg-darkRed`}
            >
              Generations
            </Menu.Button>
            <ul>
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
                  className={`origin-top-right z-20 absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                >
                  <div className={`flex flex-col p-4 gap-1 `}>
                    {POKEMON_GENERATIONS.map((generation) => (
                      <Menu.Item key={generation}>
                        <li>
                          <Link href={`/generation/${generation}`}>
                            <a
                              className={`text-white text-center font-secondary text-small font-bold block py-2 px-4 rounded-md bg-darkRed`}
                            >
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
        </li>
      </ul>
    </nav>
  );
};
