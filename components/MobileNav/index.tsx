import { useState } from "react";
import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { NAVIGATION_ITEMS, POKEMON_GENERATIONS } from "../../constants/constants";

import styles from "./index.module.css";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`block relative bg-lightBlue ${!isOpen ? styles["mobile-nav"] : styles["open"]}`}
      >
        <ul className="flex w-full h-full flex-col justify-center gap-6 content-center space-x-3">
          {NAVIGATION_ITEMS.map(({ url, name }, index) => {
            return (
              <li
                key={index}
                className={`flex flex-row justify-center content-center ${styles["mobile-list-item"]}`}
              >
                <Link href={url}>
                  <a
                    className={`w-40 text-center text-white font-secondary text-small font-bold block py-2 px-4 rounded-md bg-darkRed`}
                  >
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}
          <li
            className={`flex flex-row justify-center content-center ${styles["mobile-list-item"]}`}
          >
            <Menu as="a">
              <Menu.Button
                className={`w-40 text-center text-white font-secondary text-small font-bold block py-2 px-4 rounded-md bg-darkRed`}
              >
                Generations
              </Menu.Button>
              <ul>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                >
                  <Menu.Items
                    className={`origin-top-right z-20 absolute right-0 mt-2 w-56 bg-rotomBlue rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${styles["mobile-generations"]}`}
                  >
                    <div className={`flex flex-col p-4 gap-1`}>
                      <button
                        className={`p-1 block fixed top-0.5 right-0.5 rounded-full bg-darkRed text-white ${styles["mobile-button"]}`}
                        onClick={handleButton}
                      >
                        <svg
                          className="h-7 w-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6M6 6l12 12"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {POKEMON_GENERATIONS.map((generation) => (
                        <Menu.Item key={generation}>
                          <li className={`first-of-type:mt-10`} onClick={handleButton}>
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
      <button
        className={`p-4 block fixed top-0.5 right-0.5 rounded-full bg-rotomGray text-lightRed ${styles["mobile-button"]}`}
        onClick={handleButton}
      >
        {isOpen ? (
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg
            className="h-7 w-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              fillRule="evenodd"
            />
          </svg>
        )}
      </button>
    </>
  );
};

export default MobileNav;
