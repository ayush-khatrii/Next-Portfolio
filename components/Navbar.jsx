"use client"
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className="dark:text-white static text-black bg-transparent backdrop-blur-lg border-gray-950 border-b z-50"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >

      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarContent className="" justify="center">
        <NavbarBrand>
          <a href="/" className="font-black text-3xl dark:text-white">ak<span className="text-[#5418a1]">.</span></a>
        </NavbarBrand>
      </NavbarContent>




      <NavbarContent className="dark:text-white text-black" justify="end">
        <NavbarItem className="hidden text-lg hover:text-[#501898] hover:transition hover:ease-out hover:duration-250  dark:text-white text-black sm:flex sm:jusctify-end sm:items-end">
          <a href="#about">
            Home
          </a>
        </NavbarItem>
        <NavbarItem className="hidden text-lg hover:text-[#501898] hover:transition hover:ease-out hover:duration-250  dark:text-white text-black sm:flex sm:jusctify-end sm:items-end">
          <a href="#about">
            About
          </a>
        </NavbarItem>
        <NavbarItem className="hidden text-lg hover:text-[#501898] hover:transition hover:ease-out hover:duration-250  dark:text-white text-black sm:flex sm:jusctify-end sm:items-end">
          <a href="#about">
            Experience
          </a>
        </NavbarItem>
        <NavbarItem className="hidden text-lg hover:text-[#501898] hover:transition hover:ease-out hover:duration-250  dark:text-white text-black sm:flex sm:jusctify-end sm:items-end">
          <a href="#about">
            Skills
          </a>
        </NavbarItem>
        <NavbarItem className="hidden text-lg hover:text-[#501898] hover:transition hover:ease-out hover:duration-250  dark:text-white text-black sm:flex sm:jusctify-end sm:items-end">
          <a href="#about">
            Projects
          </a>
        </NavbarItem>
        <NavbarItem className="hidden text-lg hover:text-[#501898] hover:transition hover:ease-out hover:duration-250  dark:text-white text-black sm:flex sm:jusctify-end sm:items-end">
          <a href="#about">
            Contact
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="dark:bg-black dark:backdrop-blur-lg">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full dark:text-white text-black"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar >
  );
}
