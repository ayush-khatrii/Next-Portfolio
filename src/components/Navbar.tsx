"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TbMenu } from "react-icons/tb";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
];

const NavLink = ({
  path,
  name,
  isActive,
}: {
  path: string;
  name: string;
  isActive: boolean;
}) => {
  return (
    <Link
      href={path}
      className={cn(
        "relative px-3 py-1 text-sm transition-colors hover:text-foreground/80",
        isActive ? "text-foreground" : "text-foreground/60"
      )}
    >
      {name}
      {isActive && (
        <motion.div
          className="text-primary border-b border-foreground w-3 mx-auto absolute inset-0 -z-10"
          layoutId="navbar-indicator"
          transition={{ type: "keyframes", stiffness: 100, damping: 100 }}
        />
      )}
    </Link>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "max-w-7xl mx-auto bg-background/10 border-b backdrop-blur md:px-4 md:py-3 md:border md:w-fit md:rounded-full",
        "fixed top-0 md:top-5 left-0 right-0 z-50 transition-all duration-300",
        scrolled && "bg-background/80 border-b backdrop-blur md:shadow-md md:py-2"
      )}
    >
      <div className="flex justify-between px-5 p-2 md:p-0 md:justify-center gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-background text-sm font-bold">ak</span>
            </div>
          </Link>
        </motion.div>
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <motion.div
                className="flex space-x-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <NavLink
                      path={item.path}
                      name={item.name}
                      isActive={pathname === item.path}
                    />
                  </NavigationMenuItem>
                ))}
              </motion.div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="md:hidden">
          <Sheet>
            <div className="flex justify-center items-center gap-5">
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <TbMenu />
                </Button>
              </SheetTrigger>
            </div>
            <SheetContent side="bottom" className="w-full">
              <div className="flex flex-col h-full py-8">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={cn(
                        "px-4 py-2 text-base border-l-2 transition-all ease-out duration-300 ",
                        pathname === item.path
                          ? "border-primary font-medium bg-primary/10 text-primary"
                          : "border-transparent"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
