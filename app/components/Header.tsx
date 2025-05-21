"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null); // menu container ref

  const isActive = (path: string): boolean => pathname === path;

  // Close menu on scroll down
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`${
        isNavbarVisible
          ? "md:bg-sky-50 bg-transparent md:opacity-100 opacity-0 text-black/0 md:text-black/100 dark:md:bg-gray-900 dark:text-sky-50"
          : "bg-sky-50 opacity-95 text-black dark:bg-gray-900 dark:text-sky-50"
      } transition-all duration-300 fixed top-0 w-screen p-2.5 z-50 shadow-lg border-gray-200 dark:border-gray-500 flex md:justify-between`}
    >
      <img
        src="/originalLogo-bg.png"
        className={`h-20 mr-3 sm:h-16 md:hidden ${
          menuOpen ? "hidden" : "block"
        }`}
        alt="Logo"
      />

      <div
        className="flex md:justify-between flex-wrap items-center md:flex-row flex-col w-full overflow-hidden justify-end"
        ref={menuRef}
      >
        <Link href="/" className="flex justify-between sm:w-auto items-center">
          <img
            src="/originalLogo-bg.png"
            className="h-16 mr-3 sm:h-16 hidden md:block"
            alt="Logo"
          />
          <span
            className={`self-center text-xl md:text-2xl font-semibold text-end text-sky-800 dark:text-sky-50 ${poppins.className}`}
          >
            Jaitah Memorial Hospital
          </span>
        </Link>

        <div className="flex items-center justify-end md:justify-between sm:w-auto w-full lg:order-2">
          <a
            href="#"
            className="hidden lg:inline-block text-blue-800 border-2 border-blue-600 bg-transparent hover:text-sky-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:text-sky-50 dark:border-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            portal
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            menuOpen ? "block" : "hidden"
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/contacts", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 pl-3 pr-4 rounded lg:p-0 ${
                    isActive(item.href)
                      ? "text-sky-50 bg-sky-700 lg:bg-transparent lg:text-sky-400 dark:text-sky-50"
                      : `text-black/70 md:text-black hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 dark:text-gray-400 lg:dark:hover:text-sky-50 dark:hover:bg-gray-700 dark:hover:text-sky-50 lg:dark:hover:bg-transparent dark:border-gray-700`
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="lg:hidden">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded text-blue-800 border-2 border-blue-600 hover:text-sky-50 hover:bg-blue-800 dark:text-sky-50 dark:border-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                portal
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
