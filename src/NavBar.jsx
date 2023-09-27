import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, HomeIcon, XMarkIcon,DeviceTabletIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const navigationItems = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon,
    subItems: [
      {
        name: '- What we do',
        href: '/#what-we-do',
      },
      {
        name: '- About Us',
        href: '/#about-us',
      },
      {
        name: '- Pricing',
        href: '/#pricing',
      },
      {
        name: '- Contact',
        href: '/#contact',
      },
      // ... more subsections can go here
    ],
  },
  {
    name: 'Demo',
    href: '/demo',
    icon: DeviceTabletIcon,
    subItems: [],
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const handleMainNavigationClick = (href) => {
    if (href.charAt(href.length - 1) === '/') {
      window.location.hash = "";
    }
  };

  const navigation = navigationItems.map(item => ({
    ...item,
    current: item.href.split("#")[0] === location.pathname,
    subItems: item.subItems.map(subItem => ({
      ...subItem,
      current: subItem.href === location.pathname + location.hash
    }))
  }));

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                <div className="flex h-16 shrink-0 items-center mt-4">
          <img src="logo.png" width="40" height="40" alt="Eneport Logo" className=''></img>
          <p className='text-black text-md'>E N E P O R T</p>
          
          </div>
                  <nav className="flex flex-1 flex-col">
                  <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              onClick={() => handleMainNavigationClick(item.href)} // Add this line
              className={classNames(
                item.current ? 'bg-gray-200 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                'group flex gap-x-3 rounded-md p-2 text-md leading-6 font-semibold'
              )}
            >
              <item.icon
                className={classNames(
                  item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                  'h-6 w-6 shrink-0'
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
            {/* Subsections */}
            {item.subItems && item.subItems.length > 0 && (
              <ul className="pl-5 mt-2 space-y-1">
                {item.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.href}
                      className={classNames(
                        subItem.current ? 'bg-gray-200 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2 text-md leading-6 font-regular'
                      )}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
          <div className="flex h-16 shrink-0 items-center mt-4">
          <img src="logo.png" width="60" height="60" alt="Eneport Logo" className=''></img>
          <p>E N E P O R T</p>
          
          </div>
          <nav className="flex flex-1 flex-col">
          <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              onClick={() => handleMainNavigationClick(item.href)} // Add this line
              className={classNames(
                item.current ? 'bg-gray-200 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
              )}
            >
              <item.icon
                className={classNames(
                  item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                  'h-6 w-6 shrink-0'
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
            {/* Subsections */}
            {item.subItems && item.subItems.length > 0 && (
              <ul className="pl-5 mt-2 space-y-1">
                {item.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.href}
                      className={classNames(
                        subItem.current ? 'bg-gray-200 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-1 text-xs leading-6 font-semibold'
                      )}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
      </div>

     
        <div className="px-4 sm:px-6 lg:px-8">{/* Your content goes here */}</div>
     
    </>
  );
}
