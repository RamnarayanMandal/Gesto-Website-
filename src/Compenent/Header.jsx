import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaSearch } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Service", href: "/service", current: false },
  { name: "Project", href: "/project", current: false },
  { name: "Contact", href: "#", current: false },
];

export default function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from bg-orange-300 via-purple-500 to-pink-500 h-20"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-serif">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-end rounded-md p-2 bg-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  )}
                  <span className="sr-only">Open main menu</span>
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 w-1/4">
                  <img
                    className="h-10 w-auto"
                    src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/Group-1261153651-2.svg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block w-1/2">
                  <div className="flex space-x-4 justify-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-black font-bold hover:text-blue-700 rounded-md px-3 py-2 text-md"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 w-1/4 gap-10 ml-10">
                <button
                  type="button"
                  className="relative rounded-full p-1 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  <GiShoppingBag className="hidden lg:block md:block text-white text-2xl" />
                  <span className="sr-only">View notifications</span>
                </button>
               
                  <div>
                    <FaSearch className="hidden lg:block md:block text-white text-2xl "/>
                  </div>
                  <div className="mt-2">
                    <Link class="gto-btn-1 d-none d-sm-block px-8 py-5 hidden lg:inline md:hidden bg-blue-800 rounded-full lg:text-white" to="#">
                      GET QUOTE <i class="arrow right"></i>
                    </Link>
                   
                  </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-black absolute z-50 w-screen">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    item.current ? "text-white" : "text-white bg-black"
                  }`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
