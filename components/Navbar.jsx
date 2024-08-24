"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <Navbar
      className={`dark:text-white ${isScrolled ? "fixed border-zinc-800 border-b" : "static"
        } w-full text-black backdrop-blur-md`}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarContent className="" justify="center">
        <NavbarBrand>
          <a href="/" className="font-black text-3xl dark:text-white">
            ak<span className="text-[#5418a1]">.</span>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="dark:text-white text-black" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={index}
            className="hidden text-lg hover:text-[#501898] hover:transition hover:ease-out hover:duration-250 dark:text-white text-black sm:flex sm:justify-end sm:items-end"
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="dark:bg-black dark:backdrop-blur-lg">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full dark:text-white text-black"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href={`#${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
