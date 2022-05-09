/* This example requires Tailwind CSS v2.0+ */
import Logo from '../Assets/Eduplace.svg';
import React, { Fragment,useState, useEffect } from "react";
/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Transition} from '@headlessui/react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Course', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'Scholarship', href: '#', current: false },
]
const navigationMobile = [
  { name: 'Home', href: '#', current: true },
  { name: 'Course', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'Scholarship', href: '#', current: false },
  { name: 'Sign in', href: '#', current: false },
]

export default function Nav() {
  //navbar scroll when state actived
  const [navbar, setNavbar] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <Disclosure as="nav" className={navbar? "fixed bg-white" : "fixed md:bg-transparent xs:bg-white"}>
      {({ open }) => (
        <>
          <div className=" mx-auto px-2 w-screen sm:px-20 lg:px-20">
            <div className="flex items-center justify-between h-16">
              <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={Logo}
                    alt="Eduplace"
                  />
                </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={Logo}
                    alt="Eduplace"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6 justify-items-center">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'border-b-4 rounded-b-sm border-gray-900 text-gray-900' : 'text-gray-600 hover:border-b-4 hover:rounded-b-sm hover:border-gray-500 hover:text-gray-00',
                          'px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 xs:w-fit xs:hidden md:block">
                <button
                  type="button"
                  className="border-2 border-gray-700 p-1 pr-4 pl-4 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  Sign in
                </button>
              </div>
            </div>
          </div>
          <Transition
          as={Fragment}
          enter="transition ease-out duration-250"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 justify-center">
                {navigationMobile.map((item) => (
                  <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'border-b-4 border-gray-700 text-gray-700' : 'text-gray-500 hover:text-gray-700',
                      'block px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                      >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>                  
        </>
      )}
    </Disclosure>
  )
}

