"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Research", href: "https://www.tandfonline.com/doi/full/10.1080/10447318.2024.2426737" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full bg-primary-50 dark:bg-trueGray-900">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto xl:px-1">
        {/* Logo  */}
        <div className="flex items-center lg:w-1/3">
          <Link href="/">
            <Image
              src="/Logo.png"
              width="180"
              alt="VSCA Logo"
              height="48"
              className="h-12 w-auto rounded-lg"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <Disclosure>
          {({ open }) => (
            <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-800 rounded-md lg:hidden hover:text-primary focus:text-primary focus:bg-primary-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="absolute top-full left-0 right-0 flex flex-col w-full p-4 bg-primary-50 dark:bg-trueGray-900 border-t border-primary-200 dark:border-trueGray-700">
                  <>
                    {navigation.map((item, index) => {
                      const isExternal = item.href.startsWith('http');
                      const LinkComponent = isExternal ? 'a' : Link;
                      const linkProps = isExternal 
                        ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                        : { href: item.href };
                      return (
                        <LinkComponent key={index} {...linkProps} className="w-full px-4 py-2 text-gray-800 rounded-md dark:text-gray-300 hover:text-primary focus:text-primary focus:bg-primary-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item.name}
                        </LinkComponent>
                      );
                    })}
                  </>
                </Disclosure.Panel>
            </>
          )}
          </Disclosure>
        </div>
        
        {/* Desktop menu - centered */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-1/3">
          <ul className="flex items-center space-x-3 list-none">
            {navigation.map((menu, index) => {
              const isExternal = menu.href.startsWith('http');
              const LinkComponent = isExternal ? 'a' : Link;
              const linkProps = isExternal 
                ? { href: menu.href, target: '_blank', rel: 'noopener noreferrer' }
                : { href: menu.href };
              return (
                <li className="nav__item" key={index}>
                  <LinkComponent {...linkProps} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary focus:text-primary focus:bg-primary-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu.name}
                  </LinkComponent>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Theme changer - right */}
        <div className="flex items-center justify-end lg:w-1/3">
          <ThemeChanger />
        </div>

      </nav>
    </div>
  );
}

